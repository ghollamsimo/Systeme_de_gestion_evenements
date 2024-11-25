import mongoose from "mongoose";

export class EventDTO{
    readonly title: string;
    readonly image: string;
    readonly description: string;
    readonly participant: mongoose.Schema.Types.ObjectId;

    constructor(title : string, image: string, description: string, participant: mongoose.Schema.Types.ObjectId) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.participant = participant;
    }
}