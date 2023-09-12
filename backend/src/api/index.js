import { Router } from "express";
import auth from "./auth";
import patients from "./patients";
import pharmacyItems from "./pharmacyItems";
import users from "./users";

const router = new Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/patients", patients);
router.use("/pharmacyItems", pharmacyItems);

export default router;
