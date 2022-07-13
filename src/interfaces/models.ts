import { ObjectId } from 'mongoose';

// Enums 
import { Roles } from '../enums/enums';

/**
 * This interface describes the user properties 
 * @typeParam _id: ObjectId - The mongo id schemma
 * @typeParam username: string - User's username
 * @typeParam email: string - User's email
 * @typeParam password: string - User's password
 * @typeParam status: boolean - User's status
 * @typeParam google: boolean - If the user is logged in with google
 * @typeParam role: Roles - User's role
 * @typeParam infoClient: IInfoClient - User's personal information
 */
export interface IUser {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    status: boolean;
    google: boolean;
    role: Roles;
    infoClient: IInfoClient;
}

/**
 * This interface describes the properties of the user's personal information
 * @typeParam name: string - User's name
 * @typeParam lastname: string - User's lastname
 * @typeParam address: string - User's address
 */
interface IInfoClient {
    name: string;
    lastname: string;
    address: string;
}

/**
 * This interface describes the properties of the user's personal information
 * @typeParam name: string - Name of the collection
 * @typeParam status: string - Status of the collection
 * @typeParam userId: string - The mongo id user (admin) schemma
 */
export interface ICollection {
    _id: ObjectId;
    name: string;
    status: boolean;
    userId: ObjectId
}

