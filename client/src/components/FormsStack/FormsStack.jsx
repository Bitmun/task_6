/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import classNames from "classnames";
import { useYupValidationResolver } from "../../customHooks/yupHooks";
import { cardSchema } from "../../schemes/cardScheme";
import { PetForm } from "../PetForm/PetForm";
import "./formsStack.css";

function FormsStack({ user }) {
  const resolver = useYupValidationResolver(cardSchema);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver });

  const [radioState, setRadioState] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "pets",
  });

  // const [submitError, setSubmitError] = useState("");

  const divClass = classNames("sub-menu-wrapper", {
    "is-closed": !radioState,
  });
  useEffect(() => {
    setValue("education", false);
  }, []);

  if (user) {
    useEffect(() => {
      setValue("username", user.username);
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("gender", user.gender);
      setValue("age", user.age);
      setValue("education", user.education);
      setRadioState(user.education);
      setValue("highestEducation", user.highestEducation);
      setValue("schoolName", user.schoolName);
      setValue("email", user.email);
      setValue("phoneNumber", user.phoneNumber);
      setValue("pets", user.pets);
    }, []);
  }

  const navigate = useNavigate();

  const handleRadio = () => {
    setValue("education", !radioState);
    setRadioState(!radioState);
  };

  return (
    <form
      className="form-wrapper"
      onSubmit={handleSubmit((data) => {
        if (user) {
          const updatedData = {};
          Object.keys(user).forEach((key) => {
            if (data.hasOwnProperty(key)) {
              if (data[key] !== user[key]) {
                updatedData[key] = data[key];
              }
            }
          });

          updatedData.id = user.id;

          axios
            .patch(
              `https://task-6-server-yuiq.onrender.com/users/${user.id}`,
              updatedData,
              {
                withCredentials: true,
              },
            )
            .then(() => {
              navigate("/");
            });
          return;
        }

        const requestData = {};

        Object.keys(data).forEach((key) => {
          if (data[key]) {
            requestData[key] = data[key];
          }
        });

        axios
          .post("https://task-6-server-yuiq.onrender.com/users", data, {
            withCredentials: true,
          })
          .then(() => {
            navigate("/");
          });
      })}
    >
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Username..."
          id="usernameInput"
          aria-label="usernameInput"
          {...register("username")}
        />
        <label className="error-label" htmlFor="usernameInput">
          {errors.username && (
            <span className="error-message">{errors.username.message}</span>
          )}
        </label>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="First name..."
          id="firstNameInput"
          aria-label="firstNameInput"
          {...register("firstName")}
        />
        <label className="error-label" htmlFor="firstNameInput">
          {errors.firstName && (
            <span className="error-message">{errors.firstName.message}</span>
          )}
        </label>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Last Name..."
          id="lastNameInput"
          aria-label="lastNameInput"
          {...register("lastName")}
        />
        <label className="error-label" htmlFor="lastNameInput">
          {errors.lastName && (
            <span className="error-message">{errors.lastName.message}</span>
          )}
        </label>
      </div>
      <div className="input-container">
        <select {...register("gender")}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label className="error-label" htmlFor="lastNameInput">
          {errors.gender && (
            <span className="error-message">{errors.gender.message}</span>
          )}
        </label>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="number"
          placeholder="Age..."
          id="ageInput"
          aria-label="ageInput"
          {...register("age")}
        />
        <label className="error-label" htmlFor="ageInput">
          {errors.age && (
            <span className="error-message">{errors.age.message}</span>
          )}
        </label>
      </div>
      <div className="input-container">
        <fieldset>
          <legend>Education</legend>
          <div className="radio-wrapper">
            <div className="radio-container">
              <input
                className="input-box"
                id="educationNo"
                type="radio"
                checked={!radioState}
                onChange={handleRadio}
              />
              <label htmlFor="educationNo">No</label>
            </div>
            <div className="radio-container">
              <input
                className="input-box"
                id="educationYes"
                type="radio"
                checked={radioState}
                onChange={handleRadio}
              />
              <label htmlFor="educationYes">Yes</label>
            </div>
          </div>
          <div className={divClass}>
            <div className="input-container">
              <select {...register("highestEducation")}>
                <option value="">Select</option>
                <option value="School">School</option>
                <option value="University">University</option>
                <option value="Colledge">Colledge</option>
              </select>
              <label className="error-label" htmlFor="lastNameInput">
                {errors.highestEducation && (
                  <span className="error-message">
                    {errors.highestEducation.message}
                  </span>
                )}
              </label>
            </div>
            <div className="input-container">
              <div className="input-container">
                <input
                  className="input-box"
                  type="text"
                  placeholder="Name"
                  id="educationInput"
                  aria-label="educationInput"
                  {...register("schoolName")}
                />
                <label className="error-label" htmlFor="educationInput">
                  {errors.schoolName && (
                    <span className="error-message">
                      {errors.schoolName.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Email..."
          id="emailInput"
          aria-label="emailInput"
          {...register("email")}
        />
        <label className="error-label" htmlFor="emailInput">
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </label>
      </div>
      <div className="input-container">
        <input
          className="input-box"
          type="string"
          placeholder="*Phone number..."
          id="phoneNumberInput"
          aria-label="phoneNumberInput"
          {...register("phoneNumber")}
        />
        <label className="error-label" htmlFor="phoneNumberInput">
          {errors.phoneNumber && (
            <span className="error-message">{errors.phoneNumber.message}</span>
          )}
        </label>
      </div>
      {fields.map((item, index) => (
        <PetForm
          key={item.id}
          control={control}
          register={register}
          remove={() => remove(index)}
          index={index}
          errors={errors}
        />
      ))}
      <button
        className="input-button"
        type="button"
        onClick={() => append({ species: "", name: "" })}
      >
        Add Pet
      </button>
      <input className="input-button" type="submit" />
    </form>
  );
}

export default FormsStack;
