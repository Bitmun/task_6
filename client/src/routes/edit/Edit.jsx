import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserCard } from "../../components/UserCard/UserCard";
import FormsStack from "../../components/FormsStack/FormsStack";
import "./edit.css";

export function Edit() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const options = {
    type: "edit",
    user,
  };
  const id = params.cardId;
  const navigate = useNavigate("/");
  const handleClick = () => {
    navigate("/");
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        navigate("/");
      });
  }, []);

  return (
    <div className="main-wrapper">
      <div className="title">Edit Page</div>
      <button type="button" className="navigate-button" onClick={handleClick}>
        Go to main
      </button>
      {isLoading ? (
        <div>Is loading</div>
      ) : (
        <>
          <div className="title">Original</div>
          <UserCard data={user} />
          <div className="title">Forms:</div>
          <FormsStack options={options} />
        </>
      )}
    </div>
  );
}
