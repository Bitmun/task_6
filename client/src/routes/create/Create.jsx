/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import FormsStack from "../../components/FormsStack/FormsStack";

export function Create() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const options = {
    type: "create",
  };

  return (
    <div className="main-wrapper">
      <div>Creating new card</div>
      <button type="button" onClick={handleClick}>
        Go to main
      </button>
      <FormsStack options={options} />
    </div>
  );
}
