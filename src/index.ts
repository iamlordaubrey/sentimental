/**
 * Required External Modules
 */
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { dishesRouter } from "./dishes/dishes.router";
import { sentimentsRouter } from "./sentiments/sentiments.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";


dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/dishes", dishesRouter);
app.use("/api/sentiments", sentimentsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
