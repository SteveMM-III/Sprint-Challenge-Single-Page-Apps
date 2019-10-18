import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledContent = styled.div.attrs( props => ({
  className: 'content',
}))`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  
  a {
    align-self: center;
    text-decoration: none;
    padding: 0.4rem;
    color: black;
    box-shadow: 0 0 3px grey;

    &:hover {
      background-color: lightblue;
    }
  }
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledContent className='content'>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <NavLink to={ '/characters' } activeClassName='link-active'>Characters</NavLink>
        </StyledContent>
      </header>
    </section>
  );
}
