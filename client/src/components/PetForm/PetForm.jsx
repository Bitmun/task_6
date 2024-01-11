/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "./petForm.css";

export function PetForm({ register, remove, index, errors }) {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <select {...register(`pets[${index}].species`)} placeholder="Species">
          <option value="">Select Species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <label className="error-label" htmlFor="firstNameInput">
          {errors && errors[`pets[${index}].species`] && (
            <span className="error-message">
              {errors[`pets[${index}].species`].message}
            </span>
          )}
        </label>
        <input
          className="input-box"
          {...register(`pets[${index}].name`)}
          placeholder="Name"
        />
        <label className="error-label" htmlFor="firstNameInput">
          {errors && errors[`pets[${index}].name`] && (
            <span className="error-message">
              {errors[`pets[${index}].name`].message}
            </span>
          )}
        </label>
        <button className="input-button" type="button" onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
}
