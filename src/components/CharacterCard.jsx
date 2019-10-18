import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div.attrs( props => ({
  className: 'char-card',
}))`
  width: 40rem;
  margin: 2rem;
  display: flex;
  box-shadow: 0 0 10px rgba( 33,33,33, 0.7);

  img {
    width: 50%;
    box-shadow: 0 0 10px rgba( 33,33,33, 0.7);
  }
`;

const StyledDetails = styled.div.attrs( props => ({
  className: 'char-details',
}))`
  width: 50%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

export default function CharacterCard( props ) {
  const { name, gender, location, species, status, image } = props.char;

  return (
    <StyledCard className='char-card'>
      <img src={image} alt={ `image of ${name}` } />
      <StyledDetails className='char-details'>
        <h2>{name}</h2>

        <dl>
          <dt>
            Gender:</dt>
          <dd>
            {gender}</dd>
          <dt>
            Location:</dt>
          <dd>
            {location.name}</dd>
          <dt>
            Species:</dt>
          <dd>
            {species}</dd>
          <dt>
            Status:</dt>
          <dd>
            {status}</dd>
        </dl>
      </StyledDetails>
    </StyledCard>
  );
}
