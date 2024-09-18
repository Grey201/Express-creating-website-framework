import { Router } from "express";
import { createUser} from "./controllers/createUser.js";

const router = new Router();

export default router.post("/", createUser);