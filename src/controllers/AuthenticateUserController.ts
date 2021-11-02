import { Request, Response, NextFunction } from "express";
import { AuthenticateUserService } from "../services/authenticateUserService";


export class AuthenticateUserController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        const authenticateUserService = new AuthenticateUserService();

        let token;

        try {

            token = await authenticateUserService.execute({email, password});

        } catch(e) {

            next(e);

        }

        res.status(200).json(token);
    }
}