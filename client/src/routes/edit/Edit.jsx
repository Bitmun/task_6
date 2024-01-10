import React from "react";
import { useParams } from "react-router-dom";

export function Edit() {
  const params = useParams();
  console.log(params.cardId);
  return <div>Edit</div>;
}
