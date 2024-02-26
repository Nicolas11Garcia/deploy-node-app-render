import { Router } from "express";
import { updateUser, getAllUsers } from "../controllers/users.controller.js";

import { authToken } from "../middlewares/authToken.js";

const router = Router();

router.get("/update", updateUser);

router.get("/getAll", authToken, getAllUsers);

export default router;
