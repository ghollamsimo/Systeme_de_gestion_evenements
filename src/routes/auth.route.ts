import { Router } from "express";
import {UserController} from "../interface/http/userController";
import {UserRepositoryImpl} from "../infrastructure/repositories/userRepositoryImpl";
import {UserUseCase} from "../application/usecases/userUseCase";

const authRouter: Router = Router();

const authRepository = new UserRepositoryImpl();
const authUseCase = new UserUseCase(authRepository);
const authController: UserController = new UserController(authUseCase);
authRouter.post("/auth/register", (req, res): void => {
    authController.register(req, res);
});

authRouter.post('/auth/login', (req, res): void => {
    authController.login(req, res);
})

authRouter.post('/auth/forgot-password', (req, res): void => {
    authController.forgotPassword(req, res);
})

authRouter.post('/auth/reset-password', (req, res): void => {
    authController.resetPassword(req, res);
})
export default authRouter;
