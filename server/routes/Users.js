/* eslint-disable import/extensions */
import express from "express";
import { changeStoredUser, createUser, getItemById } from "../utils/users.js";
import { usersArray } from "../data/data.js";

export const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send(usersArray);
});

router.post("/", (req, res) => {
  createUser(req.body);
  res.status(200).json({ msg: "user created" });
});

router.patch("/:id", (req, res) => {
  const { id } = req.body;
  const prevUser = getItemById(usersArray, id);
  if (!prevUser) {
    res.status(400).json({ msg: "no such user" });
  }
  changeStoredUser(prevUser, req.body);
  res.status(200).json({ msg: "user successfully changed" });
});

router.get("/:id", (req, res) => {
  const result = getItemById(usersArray, req.params.id);

  if (!result) {
    res.status(400).json({ msg: "no such user" });
    return;
  }

  res.status(200).json(result);
});
