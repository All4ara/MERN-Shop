import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB connection Success")
    } catch (error) {
        console.log("MongoDB connection Failed")
        process.exit(1);
    }
}

export default connectDB;



