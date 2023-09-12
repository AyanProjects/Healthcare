import { Router } from "express";
import { create, deleteById, getAll, getById } from "./controller";

const router = new Router();

// router.get("/", token, list);

router.post("/add", create);

router.get("/get", getAll);

router.delete("/delete/:id", deleteById);

router.get("/get/:id", getById);

export default router;
