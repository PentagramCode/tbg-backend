import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';

// Models
import UserModel from '../models/user.model';

// Helpers
import generateJWT from '../helpers/generateJwt';

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        // Create User
        const user = new UserModel({
            username,
            email,
            password,
        });

        // Save User
        await user.save();

        res.status(201).json({
            msg: 'User successfully created',
            user,
        });
    } catch (error) {
        res.status(500).json({
            error,
        });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Validate if the email exists
        const user = await UserModel.findOne({ email, status: true });
        if (!user) {
            return res.status(400).json({
                msg: 'Incorrect credentials',
            });
        }

        // Validate password
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Incorrect credentials',
            });
        }

        // Generate Jwt
        const token = await generateJWT(user.id);
        res.status(200).json({
            msg: 'User successfully logged in',
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            error,
        });
    }
};
