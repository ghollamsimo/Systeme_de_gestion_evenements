import {Router} from "express";
import {OrganiserRepositoryImpl} from "../infrastructure/repositories/organiserRepositoryImpl";
import {OrganiserUseCase} from "../application/usecases/organiserUseCase";
import {OrganiserController} from "../interface/http/organiserController";

const organiserRouter: Router = Router();

const organiserRepositoryImpl: OrganiserRepositoryImpl = new OrganiserRepositoryImpl()
const organiserUseCase : OrganiserUseCase = new OrganiserUseCase(organiserRepositoryImpl)
const organiserController : OrganiserController = new OrganiserController(organiserUseCase)

organiserRouter.post('/store', (req, res) => {
    organiserController.store(req, res)
})

organiserRouter.get('/index', (req, res) => {
    organiserController.index(req, res)
})

organiserRouter.patch('/update/:id', (req, res) => {
    organiserController.update(req, res)
})

organiserRouter.delete('/delete/:id', (req, res) => {
    organiserController.delete(req, res)
})


export default organiserRouter