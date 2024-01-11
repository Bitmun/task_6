/* eslint-disable react/prop-types */
import React from "react";

export function PetCard({ pet }) {
  return (
    <div className="pet-wrapper">
      <div>species: {pet.species}</div>
      <div>name: {pet.name}</div>
    </div>
  );
}
