import { Request, Response } from 'express';

// Models
import CollectionModel from '../models/collection.model';

export const getCollection = async(req: Request, res:Response) => {

    const { limit = 5, from = 0 } = req.params;
    
    try {
        const [ total, collections ] = await Promise.all([
            CollectionModel.countDocuments({ status: true }),
            CollectionModel.find({ status: true })
                .skip( Number( from ))
                .limit( Number( limit ))
        ]);

        res.status(200).json({
            total,
            collections
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
};

export const postCollection = async(req: Request, res:Response) => {

    const { name } = req.body;
    const { _id } = req.user;

    try {
        const collection = new CollectionModel({
            name,
            userId: _id
        });

        collection.save();

        res.status(201).json({
            msg: 'Collection successfully created',
            collection
        });

    } catch (error) {
        res.status(500).json({
            error
        });
    }
};

export const putCollection = async(req: Request, res:Response) => {

    const { name } = req.body;
    const { id } = req.params;
    const { _id } = req.user;

    try {
        
        await CollectionModel.findByIdAndUpdate( id, { name, userId: _id });

        res.status(200).json({
            msg: 'Collection update successfully'
        });

    } catch (error) {
        res.status(500).json({
            error
        });
    }
};

export const deleteCollection = async(req: Request, res:Response) => {

    const { id } = req.params;
    const { _id } = req.user;

    try {

        await CollectionModel.findByIdAndUpdate( id, { status: false, userId: _id });

        res.status(200).json({
            msg: 'Collection delete successfully'
        });

    } catch (error) {
        res.status(500).json({
            error
        });
    }
};