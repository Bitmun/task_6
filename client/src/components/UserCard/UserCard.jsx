/* eslint-disable react/prop-types */
import React from "react";
import "./usercard.css";
// import PropTypes from "prop-types";

export function UserCard({ data, pets = null }) {
  const { username, gender, firstName, secondName, age, email, phoneNumber } =
    data;

  return (
    <div className="card-wrapper">
      <div>Username: {username}</div>
      <div>First name: {firstName}</div>
      <div>Second name: {secondName}</div>
      <div>Sex: {gender}</div>
      <div>Age: {age}</div>
      <div>{email}</div>
      <div>{phoneNumber || "no phone number"}</div>
      <div>
        {pets &&
          pets.map((pet) => (
            <div key={pet.id}>
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
