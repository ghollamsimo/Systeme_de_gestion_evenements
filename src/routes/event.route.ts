import { Router } from "express";
import {EventRepositoryImpl} from "../infrastructure/repositories/eventRepositoryImpl";
import {EventUseCase} from "../application/usecases/eventUseCase";
import {EventController} from "../interface/http/eventController";
import upload from "../config/uploadConfig";
import authMiddleware from "../middleware/authMiddleware";

const eventRouter: Router = Router();

const eventRepository: EventRepositoryImpl = new EventRepositoryImpl()
const eventUseCase: EventUseCase = new EventUseCase(eventRepository)
const eventController : EventController = new EventController(eventUseCase)

eventRouter.post('/store', authMiddleware, upload.single('image') ,(req, res) => {
    eventController.store(req, res)
})
eventRouter.get('/index', (req, res) => {
    eventController.index(req, res)
})

eventRouter.get('/show/:id', (req, res) => {
    eventController.show(req, res)
})

eventRouter.delete('/delete/:id', (req, res) => {
    eventController.delete(req, res)
})

eventRouter.patch('/update/:id',authMiddleware, (req, res) => {
    eventController.update(req, res)
})
export default eventRouter