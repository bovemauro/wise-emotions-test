import React, { useState } from 'react';
import './SearchPage.scss';
import { FormControl, InputLabel, Select, MenuItem, Grow } from '@material-ui/core';
import dogTest from '../../assets/dog-test.jpeg';

function SearchPage() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleChange = (event, name) => {
    const value = event.target.value;
    
    if(name === 'gender') {
      setGender(value);
    } else {
      setAge(value);
    }
  };

  return (
    <div className="searchPage">
      <div className="home__top">
        <h1>Dogs in Canada, US</h1>
        <div className="searchPage__filtersBar">
          <FormControl variant="outlined">
            <InputLabel id="genderId">Gender</InputLabel>
            <Select
              labelId="genderId"
              value={gender}
              onChange={(e) => handleChange(e, 'gender')}
              label="Gender"
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="ageId">Age</InputLabel>
            <Select
              labelId="ageId"
              value={age}
              onChange={(e) => handleChange(e, 'age')}
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="searchResults">
        {[1,2,3,4,5,6,7].map((el, idx) => (
          <Grow in timeout={200 * idx} key={idx}>
            <div className="petCard">
              <img src={dogTest} alt="pet name" />
              <div className="petCard__name">
                Maria Stella
              </div>
              <div className="petCard__footer" role="button">
                More info
              </div>
            </div>
          </Grow>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
