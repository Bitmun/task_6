import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "../../components/UserCard/UserCard";

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
    <div>
      <div>Main Page</div>
      <button type="button" onClick={handleClickCreate}>
        Create card
      </button>
      {users.map((user) => (
        <div className="user-container" key={user.id}>
          <UserCard data={user} />
          <button type="button" onClick={() => handleClickEdit(user.id)}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
}
