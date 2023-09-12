import { Router } from "express";
import { create, getById, updateById } from "./controller";

const router = new Router();

// router.get("/", token, list);

router.post("/add", create);

router.get("/get/:id", getById);

router.put("/update/:id", updateById);

export default router;
