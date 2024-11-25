import {EventUseCase} from "../src/application/usecases/eventUseCase";
import {EventRepositoryImpl} from "../src/infrastructure/repositories/eventRepositoryImpl";
import {EventDTO} from "../src/core/dto/EventDTO";

jest.mock("../src/application/usecases/eventUseCase");

describe('Event Test' , () => {
    let eventUseCase: EventUseCase

    beforeEach(() => {
        const eventRepositoryImpl: EventRepositoryImpl = new EventRepositoryImpl()
        eventUseCase = new EventUseCase(eventRepositoryImpl)
    })

    it('should call method of Store' , () => {
        const store = jest.spyOn(eventUseCase, 'store')
        const eventDTO : EventDTO ={
            title: 'Test Title',
            image: 'Test Image',
            description: 'Test description',
            participants: ['test', 'test'],
            organiser: 'test'
        }
        eventUseCase.store(eventDTO)
        expect(store).toBeCalledTimes(1)
        expect(store).toBeCalledWith(eventDTO)
    })

    it('should call method of index', () => {
        const index = jest.spyOn(eventUseCase, 'index')
        eventUseCase.index()
        expect(index).toBeCalledTimes(1)
    })

    it('should call method of delete' , () => {
        const deleteMethod = jest.spyOn(eventUseCase, 'delete')
        const id: string = 'test'
        eventUseCase.delete(id)
        expect(deleteMethod).toBeCalledTimes(1)
        expect(deleteMethod).toBeCalledWith(id)
    })

    it('should call method of update', () => {
        const update = jest.spyOn(eventUseCase, 'update')
        const id: string = 'test'
        const eventDTO : EventDTO ={
            title: 'Test Title',
            image: 'Test Image',
            description: 'Test description',
            participants: ['test', 'test'],
            organiser: 'test'
        }
        eventUseCase.update(id, eventDTO)
        expect(update).toBeCalledTimes(1)
        expect(update).toBeCalledWith(id, eventDTO)
    })
})