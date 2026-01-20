import cors from "cors";
import express, { Application } from "express";
import routes from './routes'
import { connectDatabase } from "./configs/database";
import { config } from "./configs"

const app: Application = express();

//Middleware
app.use(cors())
app.use(express.json());

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