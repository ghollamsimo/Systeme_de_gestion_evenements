import {UserDto} from "../../core/dto/UserDto";
import {OrganiserRepositoryImpl} from "../../infrastructure/repositories/organiserRepositoryImpl";

export class OrganiserUseCase{
    private readonly organiserRepositoryImpl: OrganiserRepositoryImpl
    constructor(organiserRepositoryImpl: OrganiserRepositoryImpl) {
        this.organiserRepositoryImpl = organiserRepositoryImpl;
    }

    store(userDto: UserDto){
        return this.organiserRepositoryImpl.store(userDto)
    }

    index(){
        return this.organiserRepositoryImpl.index()
    }

    update(id: string, userDto: UserDto){
        return this.organiserRepositoryImpl.update(id, userDto)
    }

    delete(id: string){
        return this.organiserRepositoryImpl.delete(id)
    }
}