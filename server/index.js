/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
import express from "express";

import cors from "cors";
import { usersArray } from "./data/data.js";
import { changeStoredUser, createUser, getItemById } from "./utils/users.js";

const app = express();

const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.get("/users", (req, res) => {
  res.status(200).send(usersArray);
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.body;
  const prevUser = getItemById(usersArray, id);
  changeStoredUser(prevUser, req.body);
  res.status(200).json({ msg: "user successfully changed" });
});

app.get("/users/:id", (req, res) => {
  const result = getItemById(usersArray, req.params.id);

  if (!result) {
    res.status(400).json({ msg: "no such user" });
    return;
  }

  res.status(200).json(result);
});

app.post("/users", (req, res) => {
  createUser(req.body);
  res.status(200).json({ msg: "user created" });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
