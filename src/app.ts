import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./config/settings";
import authRouter from "./routes/auth.route";
import path from "path";
import eventRoute from "./routes/event.route";
import organiserRoute from "./routes/organiser.route";

dotenv.config();

const uploadsPath = path.join(__dirname, '../uploads');

class Server {
    public app: Application;
    private readonly port: string | number;

    constructor(port: string | number = process.env.APP_PORT || 8080) {
        this.port = port;
        this.app = express();
        this.config();
        this.routing();
    }

    private config(): void {
        this.app.use(cors({
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true,
        }));

        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    private routing(): void {
        this.app.use("/", authRouter);
        this.app.use("/event", eventRoute);
        this.app.use('/organiser', organiserRoute);
    }

    public async start(): Promise<void> {
        await connectToDB();
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export const app = new Server().app;

if (process.env.NODE_ENV !== "test") {
    new Server().start();
}

export default new Server();
