import { Router } from "express";
import {
  register,
  updateUser,
  getAllUsers,
  login,
} from "../controllers/users.controller.js";
import { loginValidator, registerValidator } from "../validators/users.validators.js";
import { authToken } from "../middlewares/authToken.js";

const router = Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

router.get("/update", updateUser);

router.get("/getAll", authToken ,getAllUsers);

export default router;
