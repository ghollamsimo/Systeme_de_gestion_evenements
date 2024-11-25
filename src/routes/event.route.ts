import { Router } from "express";
import {EventRepositoryImpl} from "../infrastructure/repositories/eventRepositoryImpl";
import {EventUseCase} from "../application/usecases/eventUseCase";
import {EventController} from "../interface/http/eventController";
import upload from "../config/uploadConfig";

const eventRouter: Router = Router();

const eventRepository: EventRepositoryImpl = new EventRepositoryImpl()
const eventUseCase: EventUseCase = new EventUseCase(eventRepository)
const eventController : EventController = new EventController(eventUseCase)

eventRouter.post('/store',  upload.single('image') ,(req, res) => {
    eventController.store(req, res)
})
eventRouter.get('/index', (req, res) => {
    eventController.index(req, res)
})

export default eventRouter