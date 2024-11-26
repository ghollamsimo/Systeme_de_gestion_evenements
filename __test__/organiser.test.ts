import {OrganiserUseCase} from "../src/application/usecases/organiserUseCase";
import {OrganiserRepositoryImpl} from "../src/infrastructure/repositories/organiserRepositoryImpl";
import {UserDto} from "../src/core/dto/UserDto";

jest.mock("../src/application/usecases/organiserUseCase");

describe(' Testing Crud of Participant', () => {
    let organiserUseCase: OrganiserUseCase
    beforeEach(() => {
        const organiserRepositoryImpl: OrganiserRepositoryImpl = new OrganiserRepositoryImpl()
        organiserUseCase = new OrganiserUseCase(organiserRepositoryImpl)
    })

    it('should call method of storing', () => {
        const storeMethod = jest.spyOn(organiserUseCase , 'store')
        const userDto: UserDto = {
            name: 'test',
            email: 'test@example.com',
            password: 'test',
            role: 'participant'
        }
        organiserUseCase.store(userDto)
        expect(storeMethod).toBeCalledTimes(1)
        expect(storeMethod).toBeCalledWith(userDto)
    })

    it('should call method of getting', () => {
        const indexMethod = jest.spyOn(organiserUseCase, 'index')
        organiserUseCase.index()
        expect(indexMethod).toBeCalledTimes(1)
    })

    it('should call method of updating', () => {
        const updateMethod = jest.spyOn(organiserUseCase, 'update')
        const id: string = 'test'
        const userDto: UserDto = {
            name: 'test',
            email: 'test@example.com',
            password: 'test',
            role: 'participant'
        }
        organiserUseCase.update(id, userDto)
        expect(updateMethod).toBeCalledTimes(1)
        expect(updateMethod).toBeCalledWith(id, userDto)
    })

    it('should call method of deleting', () => {
        const deleteMethod = jest.spyOn(organiserUseCase, 'delete')
        const id: string = 'test'
        organiserUseCase.delete(id)
        expect(deleteMethod).toBeCalledTimes(1)
        expect(deleteMethod).toBeCalledWith(id)
    })
})