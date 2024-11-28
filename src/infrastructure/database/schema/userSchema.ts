import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        enum: ['organiser', 'participant'],
        default: 'participant',
        required: true,
        type: String
    },
    created_at: { type: Date, default: Date.now },
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

export default User;