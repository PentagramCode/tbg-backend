import { IUser } from '../../interfaces/models';

declare global{
    namespace Express {
        interface Request {
            user: IUser
        }
    }
}