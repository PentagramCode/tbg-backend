import { Request, Response } from 'express';

// Models
import UserModel from '../models/user.model';

export const register = async(req: Request, res: Response) => {
    
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
            error
        });
    }
    
};

export const login = (req: Request, res: Response) => {
    res.json({
        msg: 'Login'
    });
};