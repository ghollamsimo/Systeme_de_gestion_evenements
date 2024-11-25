import { EventInterface } from "../../core/interfaces/eventInterface";
import { EventEntity } from "../../core/entities/eventEntity";
import { EventDTO } from "../../core/dto/EventDTO";
import EventModel from "../database/schema/eventSchema";

export class EventRepositoryImpl implements EventInterface {
    private readonly eventModel;

    constructor(eventModel = EventModel) {
        this.eventModel = eventModel;
    }

    async delete(id: string): Promise<{ message: string }> {
        const deletedEvent = await this.eventModel.findByIdAndDelete(id);
        if (!deletedEvent) {
            throw new Error('Event not found');
        }
        return { message: 'Event deleted successfully' };
    }

    async index(): Promise<EventEntity[]> {
        const events = await this.eventModel.find().populate('participants').exec();
        return events.map(event => new EventEntity(event.title, event.image, event.description, event.participants));
    }

    async store(eventDTO: EventDTO): Promise<EventEntity> {
        const createdEvent = await this.eventModel.create({
            title: eventDTO.title,
            image: eventDTO.image,
            description: eventDTO.description,
            participants: eventDTO.participants,
        });

        return new EventEntity(
            createdEvent.title,
            createdEvent.image,
            createdEvent.description,
            createdEvent.participants
        );
    }

}
