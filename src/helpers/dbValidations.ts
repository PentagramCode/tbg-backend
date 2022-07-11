// Models
import UserModel from '../models/user.model';

/**
 * This function searches the database for a user with the same name and returns an error if found
 * @param username: string - username to search 
 */
export const existUsername = async ( username: string ) => {
    const usernameDB = await UserModel.findOne({ username, status: true });
    if ( usernameDB ) {
        throw new Error(`This username ${ username } is already registered`);
    }
};




