import React from 'react';
import './PetCard.scss';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { PET_PAGE } from '../../../../constants/routes';
import { isNilOrEmpty } from '../../../../utils';

function PetCard(props) {
  const history = useHistory();
  const { data } = props;

  /**
   * Go to pet profile page
   * @param {object} petData 
   */
  const goToProfile = ({ petData }) => {
    history.push({
      pathname: PET_PAGE,
      state: {
        data: petData,
      },
    });
  };

  return (
    <div className="petCard">
      {!isNilOrEmpty(data.primary_photo_cropped) ? (
        <img 
          src={data.primary_photo_cropped.medium} 
          alt="pet name" 
        />
      ) : (
        <div className="petCard__imagePlaceholder" />
      )}
      <div className="petCard__name">{data.name}</div>
      <div
        className="petCard__footer"
        onClick={() => goToProfile({ petData: data })}
      >
        <Button color="primary">More info</Button>
      </div>
    </div>
  );
}

export default PetCard;
