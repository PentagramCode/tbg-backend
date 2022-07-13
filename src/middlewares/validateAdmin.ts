import { NextFunction, Request, Response } from 'express';
import { Roles } from '../enums/enums';

const isAdminRole = (req: Request, res: Response, next: NextFunction) => {

    if( !req.user ) {
        return res.status(500).json({
            msg: 'The role is being validated without validating the token'
        });
    }

    const { role, username } = req.user;

    if( role !== Roles.admin ) {
        return res.status(401).json({
            msg: `${ username } is not admin`
        });
    }
 
    next();
};

export default isAdminRole;