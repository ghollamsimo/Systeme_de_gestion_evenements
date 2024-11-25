import { Request, Response } from "express";
import {EventUseCase} from "../../application/usecases/eventUseCase";

export class EventController{
    private readonly eventUseCase : EventUseCase

    constructor(eventUseCase : EventUseCase) {this.eventUseCase = eventUseCase;}

    async store(req : Request, res : Response): Promise<Response>{
        try {

        }catch (e) {
            return res.status(500).json({ success: false, message: e })
        }
    }

    async update(req : Request, res : Response): Promise<Response>{
        try {

        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }

    async index(req : Request, res : Response): Promise<Response>{
        try {

        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }

    async delete(req : Request, res : Response): Promise<Response>{
        try {

        }catch (e) {
            res.status(500).json({ success: false, message: e })
        }
    }
}