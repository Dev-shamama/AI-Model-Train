import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    
    createAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User