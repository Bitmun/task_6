import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "../../components/UserCard/UserCard";
import "./main.css";

export function Main() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const handleClickCreate = () => {
    navigate("/create");
  };
  useEffect(() => {
    axios
      .get("https://task-6-server-yuiq.onrender.com/users", {
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
        <div className="user-container" key={user.id}>
          <UserCard data={user} />
          <button
            className="edit-button"
            type="button"
            onClick={() => handleClickEdit(user.id)}
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}
