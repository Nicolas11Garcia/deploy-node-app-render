import jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send({ msg: "Token no encontrado" });
  const payload = jwt.verify(token, process.env.JWT_SECRET);

  if (Date.now() > payload.exp)
    return res.status(401).send({ error: "Token expired" });

  next();
};
