import { Types } from 'mongoose';

// Enums 
import { Roles } from '../enums/enums';

export interface IUser {
    _id: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    status: string;
    google: string;
    role: Roles;
    infoClient: Object<unknown>;
}

interface IInfoClient {
    name: string;
    lastname: string;
    address: string;
}