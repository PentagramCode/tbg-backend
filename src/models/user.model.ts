import { model, Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';

// Enums
import { Roles } from '../enums/enums';

// Interfaces
import { IUser } from '../interfaces/models';

const UserSchemma = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: Boolean, default: true },
    google: { type: Boolean, default: false },
    role: { type: String, enum: Roles, default: Roles.user },
    infoClient: { type: Object, default: {} },
}, {
    timestamps: true 
});

// Exclude props
UserSchemma.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    return user;
};

// Encrypt Password
UserSchemma.pre('save', async function (next) {
    try {
        const user = this;
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(user.password, salt);
        next();
    } catch (error) {
        throw new Error(`Password encryption error ${error} 💀`);
    }
});

const UserModel = model<IUser>('User', UserSchemma);

export default UserModel;
