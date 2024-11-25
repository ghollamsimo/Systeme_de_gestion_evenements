import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    participant: [
        {participant_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}
    ],
    created_at: {
        required: true,
        type: Date,
        default: Date.now
    }
}, { collection: 'users' });

const Event = mongoose.model('Event', eventSchema);

export default Event;