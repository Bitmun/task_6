/* eslint-disable react/prop-types */
import React from "react";
import { UserCard } from "../UserCard/UserCard";

export function UserWithButton({ user, handleClick }) {
  return (
    <div className="user-container" key={user.id}>
      <UserCard data={user} />
      <button
        className="edit-button"
        type="button"
        onClick={() => handleClick(user.id)}
      >
        edit
      </button>
    </div>
  );
}
