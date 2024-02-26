import express from "express";
import { config } from "dotenv";
import connectToDataBase from "./config/mongodb.js";
import cors from "cors";

//Routes
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";

config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());

//API Routes
app.use("/users",usersRoutes);
app.use("/auth",authRoutes);


app.listen(PORT, async () => {
  await connectToDataBase();
  console.log(`APP LEVANTADA EN PUERTO ${PORT}`);
});
