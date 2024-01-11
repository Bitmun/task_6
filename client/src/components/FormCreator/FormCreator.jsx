/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { checkArrays } from "../../utils/arrayValidation";

function FormCreator({ options: { type, user }, formData }) {
  const { setValue, setRadioState } = formData;
  const navigate = useNavigate();
  if (type === "edit") {
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
    }, [user]);
    const editSubmitCallBack = (data) => {
      if (user) {
        const updatedData = {};
        Object.keys(user).forEach((key) => {
          if (data.hasOwnProperty(key)) {
            if (key === "pets") {
              if (!checkArrays(data.pets, user.pets)) {
                updatedData[key] = data[key];
              }
            } else if (data[key] !== user[key]) {
              updatedData[key] = data[key];
            }
          }
        });

        if (Object.keys(updatedData).length === 0) {
          navigate("/");
          return;
        }

        updatedData.id = user.id;

        axios
          .patch(`http://localhost:5000/users/${user.id}`, updatedData, {
            withCredentials: true,
          })
          .then(() => {
            navigate("/");
          })
          .catch(() => {
            navigate("/");
          });
      }
    };

    return <Form formData={formData} submitCallBack={editSubmitCallBack} />;
  }
  if (type === "create") {
    const createSubmitCallBack = (data) => {
      const requestData = {};
      Object.keys(data).forEach((key) => {
        if (data[key]) {
          requestData[key] = data[key];
        }
      });

      axios
        .post("http://localhost:5000/users", data, {
          withCredentials: true,
        })
        .then(() => {
          navigate("/");
        });
    };
    return <Form formData={formData} submitCallBack={createSubmitCallBack} />;
  }
}

export default FormCreator;
