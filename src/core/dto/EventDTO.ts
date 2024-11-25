import { Types } from "mongoose";

export class EventDTO {
    readonly title: string;
    readonly image: string;
    readonly description: string;
    readonly participants: any

    constructor(
        title: string,
        image: string,
        description: string,
        participants: any
    ) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.participants = participants;
    }
}
