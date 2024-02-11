import express from "express";
import { config } from "dotenv";
import connectToDataBase from "./config/mongodb.js";
import usersRoutes from "./routes/users.routes.js";
import cors from "cors";

config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use("/users",usersRoutes);


app.listen(PORT, async () => {
  await connectToDataBase();
  console.log(`APP LEVANTADA EN PUERTO ${PORT}`);
});
