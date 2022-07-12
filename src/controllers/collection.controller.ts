import { Request, Response } from 'express';

export const getCollection = (req: Request, res:Response) => {
    res.json({
        msg: 'getCollection'
    });
};

export const postCollection = (req: Request, res:Response) => {
    res.json({
        msg: 'postCollection'
    });
};

export const putCollection = (req: Request, res:Response) => {
    res.json({
        msg: 'putCollection'
    });
};

export const deleteCollection = (req: Request, res:Response) => {
    res.json({
        msg: 'deleteCollection'
    });
};