import { Router } from "express";
import { createUser } from "./controller";

const router = new Router();

// router.get("/", token, list);

router.post("/", createUser);

export default router;
