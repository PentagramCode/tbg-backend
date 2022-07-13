import { NextFunction, request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';

interface JwtPayload {
    id: string
}

const validateJwt = async(req = request, res: Response, next: NextFunction) => {
    const token = req.header('authorization');
    
    if( !token ) {
        return res.status(401).json({
            msg: 'Token not provided'
        });
    }

    try {
        const { id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY ) as JwtPayload;

        const user = await UserModel.findById( id );

        // Check if the user exists 
        if( !user ){
            return res.status(401).json({
                msg: 'The user does not exist'
            });
        }

        // Verify status user
        if( !user.status ){
            return res.status(401).json({
                msg: 'The user is inactive'
            });
        }

        
        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token not valid'
        });
    }


};

export default validateJwt;