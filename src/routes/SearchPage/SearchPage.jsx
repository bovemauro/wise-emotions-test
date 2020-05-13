import React, { useState, useEffect } from 'react';
import './SearchPage.scss';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import { capitalize, isNilOrEmpty } from '../../utils';
import { Pagination } from '@material-ui/lab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchResults from './components/SearchResults';

function SearchPage(props) {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const { location = {}, petType = '' } = props.location?.state;
  const {
    animals,
    pagination: { total_pages },
  } = props;

  useEffect(() => {
    const { getAnimalsRequest } = props;

    getAnimalsRequest({
      page,
      location: location.value,
      petType,
      ...(!isNilOrEmpty(gender) && {
        gender,
      }),
      ...(!isNilOrEmpty(age) && {
        age,
      }),
    });
    window.scrollTo(0, 500);
  }, [page, gender, age]);

  useEffect(() => {}, [sort]);

  const handleChange = (event, name) => {
    const { value } = event.target;

    if (name === 'gender') {
      setGender(value);
    } else {
      setAge(value);
    }
  };

  const manageSorting = () => {
    setSort(isNilOrEmpty(sort) ? 'up' : sort === 'up' ? 'down' : '');
  };

  return (
    <div className="searchPage">
      <div className="searchPage__top">
        <h1>
          {capitalize(petType)} in {location.label}
        </h1>
        <div className="searchPage__filtersBar">
          <FormControl variant="outlined">
            <InputLabel id="genderId">Gender</InputLabel>
            <Select
              labelId="genderId"
              value={gender}
              onChange={(e) => handleChange(e, 'gender')}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
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
              <MenuItem value="baby">Baby</MenuItem>
              <MenuItem value="young">Young</MenuItem>
              <MenuItem value="adult">Adult</MenuItem>
              <MenuItem value="senior">Senior</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            endIcon={
              sort === 'up' ? (
                <ArrowUpwardIcon />
              ) : sort === 'down' ? (
                <ArrowDownwardIcon />
              ) : null
            }
            onClick={manageSorting}
          >
            Sort by name
          </Button>
        </div>
      </div>
      <SearchResults animals={animals} sort={sort} />
      {!isNilOrEmpty(animals) && (
        <Pagination
          color="primary"
          className="searchPage__pagination"
          count={total_pages}
          page={page}
          shape="rounded"
          onChange={(e, newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
}

export default SearchPage;
