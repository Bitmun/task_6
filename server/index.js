/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
import express from "express";

import cors from "cors";

let globalUserId = 1;

let globalPetsId = 1;

const petsArray = [];

const usersArray = [
  {
    id: 1,
    age: 18,
    education: false,
    email: "email@1.com",
    firstName: "firstname 1",
    secondName: "secondname 1",
    gender: "Male",
    highestEducation: "",
    lastName: "last name2",
    phoneNumber: "",
    schoolName: "",
    username: "username1",
  },
];

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

const getItemById = (arr, id) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id.toString() === id.toString()) {
      return arr[i];
    }
  }
  return null;
};

const getUsersPets = (arr, id) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
    if (arr[i].userId.toString() === id.toString()) {
      res.push(arr[i]);
    }
  }
  return res;
};

const createUser = (userData) => {
  globalUserId += 1;
  const {
    schoolName = "",
    highestEducation = "",
    username,
    age,
    firstName,
    lastName,
    education,
    gender,
    email,
    pets,
    phoneNumber = "",
  } = userData;
  if (pets.length > 0) {
    for (let i = 0; i < pets.length; i += 1) {
      pets[i].id = globalPetsId;
      pets[i].userId = globalUserId;
      globalPetsId += 1;
      petsArray.push(pets[i]);
    }
  }
  const user = {
    id: globalUserId,
    username,
    firstName,
    lastName,
    education,
    gender,
    email,
    pets,
    phoneNumber,
    age,
    schoolName,
    highestEducation,
  };

  usersArray.push(user);
};

const changeStoredUser = (originalUser, newData) => {
  Object.keys(originalUser).forEach((key) => {
    if (newData.hasOwnProperty(key)) {
      originalUser[key] = newData[key];
    }
  });
};

const addNewPetsForUser = (newPets, userId) => {
  for (let i = 0; i < newPets.length; i += 1) {
    const newPet = {};
    newPet.id = globalPetsId.toString();
    newPet.userId = userId;
    newPets[i].userId = globalUserId;
    globalPetsId += 1;
    petsArray.push(newPet[i]);
  }
};

const updateUserPets = (userId, newPets) => {
  const origin = getUsersPets(petsArray, userId);
  if (origin.length === 0) {
    addNewPetsForUser(newPets, userId);
  }
};

app.patch("/users/:id", (req, res) => {
  const { id } = req.body;
  if (req.body.pets) {
    updateUserPets(id, req.body.pets);
  }
  console.log(req.body);
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

app.get("/pets/:id", (req, res) => {
  const result = getUsersPets(petsArray, req.params.id);

  if (!result) {
    res.status(200).json({ msg: "no pets" });
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
