import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import './SearchForm.scss';
import { useHistory } from 'react-router-dom';
import { SEARCH_PAGE } from '../../../../constants/routes';
import { isNilOrEmpty } from '../../../../utils';

function Home() {
  const history = useHistory();
  const [location, setLocation] = useState('');
  const [petType, setPetType] = useState('');

  const handleSubmitClick = () => {
    history.push({
      pathname: SEARCH_PAGE,
      state: {
        location,
        petType,
      },
    });
  };

  return (
    <form className="searchForm">
      <div className="searchForm__inputsContainer">
        <Autocomplete
          className="searchForm__inputsContainer__autocomplete"
          value={location}
          onChange={(e, value) => setLocation(value)}
          options={[
            { value: 'phoenix, az', label: 'Phoenix, AZ' },
            { value: 'denver, co', label: 'Denver, CO' },
            { value: 'syracuse, ny', label: 'Syracuse, NY' },
            { value: 'fredonia, ny', label: 'Fredonia, NY' },
            { value: 'pittsburg, ca', label: 'Pittsburg, CA' },
            { value: 'los-angeles, ca', label: 'Los Angeles, CA' },
            { value: 'miami, fl', label: 'Miami, FL' },
            { value: 'detroit, mi', label: 'Detroit, MI' },
            
          ]}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField {...params} label="Location" variant="outlined" />
          )}
        />
        <RadioGroup
          row
          aria-label="pet type"
          value={petType}
          name="petType"
          defaultValue="Dog"
          onChange={(e) => setPetType(e.target.value)}
        >
          <FormControlLabel
            value="Dog"
            control={<Radio color="primary" />}
            label="Dogs"
          />
          <FormControlLabel
            value="Cat"
            control={<Radio color="primary" />}
            label="Cats"
          />
        </RadioGroup>
      </div>
      <div className="searchForm__ctaContainer">
        <Button
          variant="contained"
          color="primary"
          disabled={isNilOrEmpty(location) || isNilOrEmpty(petType)}
          endIcon={<PetsIcon />}
          onClick={handleSubmitClick}
        >
          Search
        </Button>
      </div>
    </form>
  );
}

export default Home;
