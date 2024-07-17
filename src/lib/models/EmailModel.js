import mongoose, { Schema } from "mongoose";



const emailSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },

    date: {
        type: Date,
        default: () => Date.now()
    }
});

const emailModel = mongoose.models.email || mongoose.model("email", emailSchema);
export default emailModel;