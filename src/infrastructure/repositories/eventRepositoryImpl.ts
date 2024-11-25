import {EventInterface} from "../../core/interfaces/eventInterface";
import {EventEntity} from "../../core/entities/eventEntity";
import {EventDTO} from "../../core/dto/EventDTO";

export class EventRepositoryImpl implements EventInterface{
    delete(id: string): Promise<{ message: string }> {
        return Promise.resolve({message: ""});
    }

    index(): Promise<EventEntity> {
        return Promise.resolve(undefined);
    }

    store(eventDTO: EventDTO): Promise<EventEntity> {
        return Promise.resolve(undefined);
    }

    update(id: string, eventDTO: EventDTO): Promise<EventEntity> {
        return Promise.resolve(undefined);
    }

}