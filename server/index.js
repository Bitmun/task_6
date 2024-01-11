/* eslint-disable import/extensions */
import express from "express";

import cors from "cors";
import { router as userRouter } from "./routes/Users.js";

const app = express();

const PORT = 5000;

const corsOptions = {
  origin: "https://task-6-76e5.onrender.com/",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
