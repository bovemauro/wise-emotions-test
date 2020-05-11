import { TextField, Button, RadioGroup, FormControlLabel, Radio, Icon } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import PetsIcon from '@material-ui/icons/Pets';
import logo from '../../assets/images/logo.png';
import './Home.scss';
import { useHistory } from 'react-router-dom';
import { SEARCH_PAGE } from '../../constants/routes';

function Home() {
  const history = useHistory();

  function handleSubmitClick() {
    history.push(SEARCH_PAGE);
  }

  return (
    <div className="home">
      <div className="home__top">
        <h1>Look for a new four-legged friend</h1>
        <form className="form">
          <div className="form__inputsContainer">
            <Autocomplete
              className="form__inputsContainer__autocomplete"
              options={[
                { value: 'test', label: 'Test' }
              ]}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => <TextField {...params} label="Location" variant="outlined" />}
            />
            <RadioGroup row aria-label="pet type" name="petType" defaultValue="dogs">
              <FormControlLabel
                value="dogs"
                control={<Radio color="primary" />}
                label="Dogs"
              />
              <FormControlLabel
                value="cats"
                control={<Radio color="primary" />}
                label="Cats"
              />
            </RadioGroup>
          </div>
          <div className="form__ctaContainer">
            <Button 
              variant="contained" 
              color="primary" 
              endIcon={<PetsIcon />}
              onClick={handleSubmitClick}
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="home__bottom">
        <img src={logo} alt="Wise Emotions Logo" />
      </div>
    </div>
  );
}

export default Home;
