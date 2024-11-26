import {UserDto} from "../dto/UserDto";
import {UserEntity} from "../entities/userEntity";

export interface OrganiserInterface{
    store(userDto: UserDto): Promise<UserEntity>
    index(): Promise<UserEntity[]>
    update(id:string, userDto: UserDto): Promise<{message: string}>
    delete(id:string): Promise<{ message: string }>
}