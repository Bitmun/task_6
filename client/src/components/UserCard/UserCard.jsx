import React from "react";
import PropTypes from "prop-types";

export function UserCard({
  username,
  gender,
  firstname,
  secondname,
  age,
  criminalRecords,
  email,
  phoneNumber = null,
  pets = null,
}) {
  return (
    <div>
      {username}
      {gender}
      {firstname}
      {secondname}
      {age}
      {criminalRecords}
      {email}
      {phoneNumber}
      {pets ? (
        pets.map((pet) => (
          <div>
            <div>species: {pet.species}</div>
            <div>name: {pet.name}</div>
          </div>
        ))
      ) : (
        <div>no pets</div>
      )}
    </div>
  );
}

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  secondname: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  criminalRecords: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number,
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      species: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

UserCard.defaultProps = {
  phoneNumber: null,
  pets: null,
};
