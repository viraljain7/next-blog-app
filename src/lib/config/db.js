import mongoose from 'mongoose';


const DB_NAME = "NextBlogApp"
const connectDB = async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB Successfully Connected");
        });
        connection.on("error", (error) => {
            console.log(
                "MongoDB Connection Failed, please make sure  DB is up and running :: ",
                error
            );
            process.exit(1);
        });
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED:: ", error);
        process.exit(1)
    }
}

export default connectDB;