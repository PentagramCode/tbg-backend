import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

/**
 * This function checks if there is an error in the validations and returns an array of errors
 */
export const existErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }
    next();
};