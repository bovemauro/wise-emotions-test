import React from 'react';
import './SearchResults.scss';
import { sortWith, ascend, prop, descend } from 'ramda';
import { Grow } from '@material-ui/core';
import PetCard from '../PetCard';
import { useStore } from 'react-redux';
import PetCardSkeleton from '../PetCardSkeleton';

function SearchResults(props) {
  const { animals, sort } = props;
  const store = useStore().getState();
  const skeletonsList = [1,2,3,4,5,6,7,8,9,10];

  function sortedList() {
    const name = prop('name');
    const published_at = prop('published_at');

    return sortWith(
      [
        sort === 'up'
          ? ascend(name)
          : sort === 'down'
            ? descend(name)
            : descend(published_at),
      ],
      animals
    );
  }

  return (
    <div className="searchResults">
      {store.searchPage.isLoading ? (
        skeletonsList.map((el, idx) => <PetCardSkeleton key={idx} />)
      ) : (
          sortedList().map((el, idx) => (
            <Grow in timeout={200 * idx} key={idx}>
              <PetCard data={el} />
            </Grow>
          ))
        )}

    </div>
  );
}

export default SearchResults;
