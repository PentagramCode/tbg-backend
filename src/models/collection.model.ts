import { Schema, model } from 'mongoose';

// Interfaces
import { ICollection } from '../interfaces/models';

const CollectionSchemma = new Schema<ICollection>({
    name: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
});

// Exclude props
CollectionSchemma.methods.toJSON = function () {
    const { __v, ...collection } = this.toObject();
    return collection;
};

const CollectionModel = model<ICollection>('Collection', CollectionSchemma);

export default CollectionModel;