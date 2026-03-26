import express from "express";
import { errorHandling } from "@/middlewares/error-handling";
import "express-async-errors";

const app = express();
app.use(express.json());
app.use(errorHandling);

export { app };
