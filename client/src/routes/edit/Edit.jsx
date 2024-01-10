import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserCard } from "../../components/UserCard/UserCard";
import FormsStack from "../../components/FormsStack/FormsStack";

export function Edit() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pets, setPets] = useState([]);
  const params = useParams();
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
      });

    axios
      .get(`http://localhost:5000/pets/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        const parsedResponse = res.data;
        setPets(parsedResponse);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div>Edit Page</div>
      <button type="button" onClick={handleClick}>
        Go to main
      </button>
      {isLoading ? (
        <div>Is loading</div>
      ) : (
        <>
          <div>Original</div>
          <UserCard data={user} pets={pets} />
          <div>Forms:</div>
          <FormsStack user={user} pets={pets} />
        </>
      )}
    </div>
  );
}
