import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import uuid from 'uuid';

import CharacterCard from "./CharacterCard";

const StyledLink = styled.div.attrs( props => ({
  className: 'link',
}))`
  width: 4rem;
  text-align: center;
  text-decoration: none;
  padding: 0.4rem;
  color: black;
  box-shadow: 0 0 3px grey;

  &:hover {
    background-color: lightblue;
  }
`;

export default function CharacterList( props ) {
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
          props.setCharList( response.data.results );
        })
        .catch( error => {
          console.error( error ); 
        });
    }
    getChars();
  }, []);

  return (
    <section className="character-list">
      <StyledLink className='link'>
        <NavLink to='/' activeClassName='link-active'>Home</NavLink>
      </StyledLink>
      <StyledLink className='link'>
        <NavLink to='/search' activeClassName='link-active'>Search</NavLink>
      </StyledLink>
      {chars.map( char => (
        <CharacterCard key={uuid.v4()} char={char} />
      ))}
    </section>
  );
}
