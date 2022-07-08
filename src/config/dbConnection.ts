import { connect } from 'mongoose';

const dbConnection = async() => {
    const mongoUri : string = process.env.MONGODB_URI_DEV || '';
    try {
        await connect(mongoUri);
        console.log('Database Online ✅');
    } catch (error) {
        console.log(`Database connection error ${error}`);
    }
};

export default dbConnection;