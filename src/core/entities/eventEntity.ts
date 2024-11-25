import { Types } from "mongoose";

export class EventEntity {
    constructor(
        public readonly title: string,
        public readonly image: string,
        public readonly description: string,
        public readonly participants: any
    ) {}
}
