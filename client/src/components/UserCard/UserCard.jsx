/* eslint-disable react/prop-types */
import React from "react";
import "./usercard.css";
import { PetCard } from "../PetCard/PetCard";

export function UserCard({
  data: {
    username,
    gender,
    firstName,
    pets,
    lastName,
    age,
    email,
    phoneNumber,
  },
}) {
  return (
    <div className="card-wrapper">
      <div className="username">{username}</div>
      <div className="name-wrapper">
        <div className="first-name">{firstName}</div>
        <div className="last-name">{lastName}</div>
      </div>
      <div className="age-sex">
        <div>Sex: {gender} </div>
        <div>Age: {age}</div>
      </div>
      <div className="email">{email}</div>
      <div className="phone-number">{phoneNumber || "no phone number"}</div>
      <div className="pets-wrapper">
        {pets.map((pet) => (
          <PetCard pet={pet} />
        ))}
      </div>
    </div>
  );
}
