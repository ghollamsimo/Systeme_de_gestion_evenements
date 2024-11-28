import {EventRepositoryImpl} from "../../infrastructure/repositories/eventRepositoryImpl";
import {EventDTO} from "../../core/dto/EventDTO";

export class EventUseCase{
    private eventRepositoryImpl: EventRepositoryImpl;

    constructor(eventRepositoryImpl: EventRepositoryImpl) {
        this.eventRepositoryImpl = eventRepositoryImpl;
    }

    store(eventDTO: EventDTO){
        return this.eventRepositoryImpl.store(eventDTO)
    }

    index(){
        return this.eventRepositoryImpl.index()
    }

    delete(id: string){
        return this.eventRepositoryImpl.delete(id)
    }

    update(id: string , eventDTO: EventDTO){
        return this.eventRepositoryImpl.update(id, eventDTO)
    }

    show(id: string){
        return this.eventRepositoryImpl.show(id)
    }
}