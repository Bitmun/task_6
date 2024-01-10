/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

export function PetForm({ register, remove, index, errors }) {
  return (
    <div>
      <select {...register(`pets[${index}].species`)} placeholder="Species">
        <option value="">Select Species</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="bird">Bird</option>
      </select>
      {errors && errors[`pets[${index}].species`] && (
        <p className="error">{errors[`pets[${index}].species`].message}</p>
      )}
      <input {...register(`pets[${index}].name`)} placeholder="Name" />
      {errors && errors[`pets[${index}].name`] && (
        <p className="error">{errors[`pets[${index}].name`].message}</p>
      )}
      <button type="button" onClick={remove}>
        Delete
      </button>
    </div>
  );
}
