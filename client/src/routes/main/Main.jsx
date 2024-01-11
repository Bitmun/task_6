import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import { UserWithButton } from "../../components/UserWithButton/UserWithButton";

export function Main() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/create");
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/users", {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  const handleClickEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="main-wrapper">
      <div className="title-text">Main Page</div>
      <button
        className="create-button"
        type="button"
        onClick={handleClickCreate}
      >
        Create card
      </button>
      {users.map((user) => (
        <UserWithButton user={user} handleClick={handleClickEdit} />
      ))}
    </div>
  );
}
