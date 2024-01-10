/* eslint-disable import/extensions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
import { usersArray } from "../data/data.js";

let globalUserId = 1;

export const getItemById = (arr, id) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id.toString() === id.toString()) {
      return arr[i];
    }
  }
  return null;
};

export const createUser = (userData) => {
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

export const changeStoredUser = (originalUser, newData) => {
  Object.keys(originalUser).forEach((key) => {
    if (newData.hasOwnProperty(key)) {
      originalUser[key] = newData[key];
    }
  });
};
