import mongoose from "mongoose";

export class EventDTO {
    readonly title: string;
    readonly image: string;
    readonly description: string;
    readonly participants: any
    readonly organiser: any
    constructor(
        title: string,
        image: string,
        description: string,
        participants: any,
        organiser: any
    ) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.participants = participants;
        this.organiser = organiser
    }
}
