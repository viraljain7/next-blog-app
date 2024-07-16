import mongoose from 'mongoose';


const DB_NAME = "NextBlogApp"
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MongoDB Connected !! DB HOST :: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED:: ", error);
        process.exit(1)
    }
}

export default connectDB;