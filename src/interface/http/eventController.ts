import { Request, Response } from "express";
import {EventUseCase} from "../../application/usecases/eventUseCase";
import {EventDTO} from "../../core/dto/EventDTO";
import {EventEntity} from "../../core/entities/eventEntity";

export class EventController{
    private readonly eventUseCase : EventUseCase

    constructor(eventUseCase : EventUseCase) {this.eventUseCase = eventUseCase;}
    async show(req: Request, res: Response) {
        try {
            const {id} = req.params
            const event = await this.eventUseCase.show(id)
            return res.status(200).json(event)
        }catch (e){
            res.status(500).json({success: false, message: 'event not found'})
        }
    }
    async store(req: Request, res: Response): Promise<Response> {
        try {
            const { title, description , participants} = req.body;
            const image = req.file?.filename;
            const organiser = req.user?.id
            if (!title || !description || !image) {
                return res.status(400).json({ success: false, message: "All fields are required, including the image" });
            }

            const eventDto: EventDTO = new EventDTO(title, image, description, participants, organiser);

            const event: EventEntity = await this.eventUseCase.store(eventDto);
            return res.status(201).json({ success: true, data: event });

        } catch (e) {
            return res.status(500).json({ success: false, message: e || "An error occurred" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const organiser = req.user?.id;
            const { title, image, description, participant } = req.body;
            if (!title || !image || !description || !participant) {
                return res.status(400).json({ success: false, message: "All fields are required" });
            }
            const eventDto: EventDTO = new EventDTO(title, image, description, participant, organiser);
            const result = await this.eventUseCase.update(id, eventDto);
            return res.status(200).json({ success: true, data: result });
        } catch (e) {
            res.status(500).json({ success: false, message: e || "An error occurred" });
        }
    }

    async index(req : Request, res : Response){
        try {
            const event = await this.eventUseCase.index()
            return res.status(200).json(event)
        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }

    async delete(req : Request, res : Response){
        try {
            const {id} = req.params
            const event = await this.eventUseCase.delete(id)
            return res.status(200).json({success: true})
        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }
}