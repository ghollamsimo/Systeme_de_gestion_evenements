import { Request, Response } from "express";
import { UserUseCase } from "../../application/usecases/userUseCase";
import {LoginDTO} from "../../core/dto/LoginDTO";
import {ForgotDTO} from "../../core/dto/ForgotDTO";
import {ResetDTO} from "../../core/dto/ResetDTO";
import {UserEntity} from "../../core/entities/userEntity";

export class UserController {
    private readonly userUseCase: UserUseCase
    constructor(userUseCase : UserUseCase) {
        this.userUseCase = userUseCase
    }

    async stats(req: Request, res: Response){
        try {
            const stats = await this.userUseCase.stats()
            return res.status(200).json(stats);
        }catch (e){
            res.status(500).json({success: false, message: e});
        }
    }
    async show(req: Request, res: Response) {
        try {
            const {id} = req.params
            const user = await this.userUseCase.show(id)
            return res.status(200).json(user)
        }catch (e){
            res.status(500).json({success: false, message: 'user not found'})
        }
    }
    async register(req: Request, res: Response): Promise<void> {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: "Name, email, and password are required" });
            return;
        }

        try {
            const user = await this.userUseCase.register( name, email, password , role);
            res.status(200).json(user);
        } catch (error) {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    }


    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const loginDTO = new LoginDTO(email, password);
            const { token } = await this.userUseCase.login(loginDTO);
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(401).json({ message: "Invalid email or password",});
        }
    }

    async forgotPassword(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body;
            const forgotDTO = new ForgotDTO(email);
            await this.userUseCase.forgotPassword(forgotDTO);
            return res.json({ message: 'Email sent successfully' });
        } catch (err) {
            return res.json({ message: 'Email sending failed' });
        }
    }

    async resetPassword(req: Request, res: Response): Promise<Response> {
        try {
            const { password } = req.body;
            const { resetToken } = req.query;

            if (!resetToken || !password) {
                return res.status(400).json({ message: "Reset token and new password are required" });
            }

            const resetDTO = new ResetDTO(resetToken as string, password);
            await this.userUseCase.resetPassword(resetDTO);

            return res.status(200).json({ message: "Password reset successful" });
        } catch (err) {
            return res.status(500).json({ message: "Password reset failed" });
        }
    }

}

