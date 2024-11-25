import {EventEntity} from "../entities/eventEntity";
import {EventDTO} from "../dto/EventDTO";

export interface EventInterface{
    store(eventDTO: EventDTO): Promise<EventEntity>
    index(): Promise<EventEntity>
    delete(id: string): Promise<{message: string}>
    update(id: string, eventDTO: EventDTO): Promise<EventEntity>
}