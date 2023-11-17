import mongoose from "mongoose"

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    prompt: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.models.history ||  mongoose.model('history', schema);
 
export default User