import { Router } from "express";
import { health } from "./controller.js";

const router = new Router();

export default router.use("/", health);
