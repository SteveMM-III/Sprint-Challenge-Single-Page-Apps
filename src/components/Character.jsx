import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import CharacterCard from './CharacterCard';

const Character = ( props ) => {
  /* const [char, setChar] = useState( {} );

  const url = `https://rickandmortyapi.com/api/character/${props.match.params.id}`;

  useEffect(() => {
    axios
      .get( url )
      .then( response => setChar( response ) )
      .catch( error => {
        console.error( error ); 
      });

  }, [url]); */

  return (
    <CharacterCard char={props.char} />
  );
};

export default Character;