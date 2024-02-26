import { matchedData } from "express-validator";
import UserModel from "../schemas/user.schema.js";
import jwt from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import { v4 as uuidv4 } from "uuid";


export const updateUser = async (req, res) => {
  console.log("update");
};

export const getAllUsers = async  (req, res) => {
  try {
    const data = await UserModel.find({});
    res.send(data);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ error: "Se produjo un error interno en el servidor" });
  }
};
