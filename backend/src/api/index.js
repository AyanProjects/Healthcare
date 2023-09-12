import { Router } from "express";
import accompanies from "./accompanies";
import auth from "./auth";
import orderCatalogs from "./orderCatalogs";
import patients from "./patients";
import pharmacyDrugs from "./pharmacyDrugs";
import pharmacyItems from "./pharmacyItems";
import users from "./users";

const router = new Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/patients", patients);
router.use("/accompanies", accompanies);
router.use("/pharmacyItems", pharmacyItems);
router.use("/pharmacyDrugs", pharmacyDrugs);
router.use("/orderCatalogs", orderCatalogs);

export default router;
