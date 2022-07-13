// Models
import CollectionModel from '../models/collection.model';
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



/**
 * This function searches the database to see if there is a collection with that name and returns an error
 * @param name: string - name of the collection 
 */
export const existCollection = async( name: string ) => {
    const collectionDB = await CollectionModel.findOne({ name, status: true });
    if( collectionDB ) {
        throw new Error(`A collection already exists under the name ${ name }`);
    }
};
