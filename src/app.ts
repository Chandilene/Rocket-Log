import express from "express";
import { errorHandling } from "@/middlewares/error-handling";
import { routes } from "./routes";
import "express-async-errors";

const app = express();
app.use(express.json());
app.use(errorHandling);
app.use(routes);

export { app };
