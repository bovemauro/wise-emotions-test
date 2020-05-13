import React from 'react';
import logo from '../../assets/images/logo.png';
import './Home.scss';
import SearchForm from './components/SearchForm';

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <h1>Look for a new four-legged friend</h1>
        <SearchForm />
      </div>
      <div className="home__bottom">
        <img src={logo} alt="Wise Emotions Logo" />
      </div>
    </div>
  );
}

export default Home;
