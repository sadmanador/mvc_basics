import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { config } from "./configs";
import { connectDatabase } from "./configs/database";
import routes from './routes';

const app: Application = express();

//Middleware
app.use(cors())
app.use(express.json());

// Logger middleware
app.use((req, _res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//route
app.use("/api", routes);

//start server with db
const startServer = async (): Promise<void> => {
    try {
        await connectDatabase();

        app.listen(config.port, () => {
            console.log(`Server is running on: ${config.port}`);
        })

    } catch (err) {
        console.error("Failed to start sarver:", err);
        process.exit(1)
    }
}

export default app;

startServer();