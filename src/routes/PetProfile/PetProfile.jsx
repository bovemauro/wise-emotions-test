import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './PetProfile.scss';
import { Button } from '@material-ui/core';

function PetProfile(props) {
  const {
    photos = [],
    name,
    breeds,
    gender,
    contact: { address },
  } = props.location.state.data;
  const builtAddress = (
    <h2>
      {address.city}, {address.state}
    </h2>
  );

  console.log(props.location.state.data);

  return (
    <div className="petProfile">
      <Carousel className="petProfile__carousel">
        {photos.map((el, idx) => (
          <div className="petProfile__carousel__imageContainer" key={idx}>
            <img src={el.full} alt={name} />
          </div>
        ))}
      </Carousel>
      <div className="petProfile__containerInfo">
        <div className="petProfile__containerInfo__card">
          <Button
            variant="contained"
            color="primary"
            className="petProfile__containerInfo__card__ctaAdopt"
          >
            Adopt
          </Button>
          <h1>{name}</h1>
          {builtAddress}
          <hr />
          <h3>
            {breeds.primary} - {gender}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;
