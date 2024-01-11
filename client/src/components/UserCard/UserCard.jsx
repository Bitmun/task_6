/* eslint-disable react/prop-types */
import React from "react";
import "./usercard.css";

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
          <div key={pet} className="pet-wrapper">
            <div>species: {pet.species}</div>
            <div>name: {pet.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// UserCard.propTypes = {
//   username: PropTypes.string.isRequired,
//   firstname: PropTypes.string.isRequired,
//   secondname: PropTypes.string.isRequired,
//   gender: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   email: PropTypes.string.isRequired,
//   phoneNumber: PropTypes.number,
//   pets: PropTypes.arrayOf(
//     PropTypes.shape({
//       species: PropTypes.string,
//       name: PropTypes.string,
//     }),
//   ),
// };

// UserCard.defaultProps = {
//   phoneNumber: null,
//   pets: null,
// };
