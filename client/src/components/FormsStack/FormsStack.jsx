/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import classNames from "classnames";
import { useYupValidationResolver } from "../../customHooks/yupHooks";
import { cardSchema } from "../../schemes/cardScheme";
import "./formsStack.css";
import FormCreator from "../FormCreator/FormCreator";

function FormsStack({ options: { type, user } }) {
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

  const divClass = classNames("sub-menu-wrapper", {
    "is-closed": !radioState,
  });

  useEffect(() => {
    setValue("education", false);
  }, []);

  const handleRadio = () => {
    setValue("education", !radioState);
    setRadioState(!radioState);
  };

  const formData = {
    setValue,
    register,
    handleSubmit,
    handleRadio,
    errors,
    radioState,
    divClass,
    control,
    remove,
    fields,
    append,
    setRadioState,
  };

  const options = {
    type,
    user,
  };

  return <FormCreator formData={formData} options={options} />;
}

export default FormsStack;
