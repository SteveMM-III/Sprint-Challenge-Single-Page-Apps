import React from "react";

export default function CharacterCard( props ) {
  console.log(props.char);
  const { name, gender, location, species, status, image } = props.char;

  return (
    <div className='char-card'>
      <img src={image} alt={ `image of ${name}` } />
      <div className='char-details'>
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
      </div>
    </div>
  );
}
