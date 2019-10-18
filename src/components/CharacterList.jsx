import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState( [] );
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getChars = () => {
      axios
        .get( `https://rickandmortyapi.com/api/character/` )
        .then( response => {
          setChars( response.data.results );
        })
        .catch();
    }
    getChars();
  }, []);

  return (
    <section className="character-list">
      {chars.map( char => (
        <CharacterCard key={char.id} char={char} />
      ))}
    </section>
  );
}
