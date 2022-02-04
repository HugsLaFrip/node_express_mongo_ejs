import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const dbConnect = mongoose
    .connect(`mongodb+srv://${process.env.DBHOST}:${process.env.DBPASSWORD}@cluster0.0jahg.mongodb.net/TP_NodeJs`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err))

export default dbConnect;