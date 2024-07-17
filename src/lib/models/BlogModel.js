import mongoose, { Schema } from "mongoose";



const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    authorImg: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: () => Date.now()
    }
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);
export default BlogModel;