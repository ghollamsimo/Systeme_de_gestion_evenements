import {OrganiserUseCase} from "../../application/usecases/organiserUseCase";
import { Request, Response } from "express";
import {UserDto} from "../../core/dto/UserDto";
import {UserEntity} from "../../core/entities/userEntity";

export class OrganiserController{
    private readonly organiserUseCase: OrganiserUseCase
    constructor(organiserUseCase : OrganiserUseCase) {
        this.organiserUseCase = organiserUseCase
    }

    async store(req: Request, res: Response) {
        try {
            const {name, email, password, role} = req.body
            if (!name || !email || !password || !role) {
                return res.status(400).json({ success: false, message: "All fields are required" });
            }

            const userDto : UserDto = new UserDto(name, email, password, role)
            const user: UserEntity = await this.organiserUseCase.store(userDto)
            return res.status(201).json({ success: true, data: user })
        }catch (e) {
            res.status(500).json({ success: false, message: e || "An error occurred" })
        }
    }

    async index(req : Request, res : Response){
        try {
            const participant = await this.organiserUseCase.index()
            return res.status(200).json(participant)
        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const {name, email, password, role} = req.body;
            if (!name || !email || !password || !role) {
                return res.status(400).json({ success: false, message: "All fields are required" });
            }
            const participantDto: UserDto = new UserDto(name, email, password, role)
            const results = await this.organiserUseCase.update(id, participantDto);
            return res.status(200).json({ success: true, data: results });
        } catch (e) {
            res.status(500).json({ success: false, message: e || "An error occurred" });
        }
    }

    async delete(req : Request, res : Response){
        try {
            const {id} = req.params
            await this.organiserUseCase.delete(id)
            return res.status(200).json({success: true})
        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }
}