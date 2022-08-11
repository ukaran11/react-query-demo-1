import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json();
  };

  const { data, status } = useQuery(["characters"], fetchCharacters);
  console.log(data);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error ...</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} />
      ))}
    </div>
  );
};

export default Characters;
