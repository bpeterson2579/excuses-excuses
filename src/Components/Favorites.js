import '../CSS/Favorites.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({favExcuses}) => {
  return(
    <>
      <h3>Favorites</h3>
      <Link to='/'>
        <button className='go-home'>Go Home</button>
      </Link>
    </>
  )
}

export default Favorites;