import { Router } from "express";
import { getAll } from "./controller";

const router = new Router();

router.get("/get", getAll);

export default router;
