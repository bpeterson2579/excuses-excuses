import '../CSS/Favorites.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({favExcuses}) => {
  const favoriteExcuses = favExcuses.map(excuse => {
    return(
      <div className='fav-excuse-card'>
        <h4 className='fav-category'>Category: {excuse.category.toUpperCase()}</h4>
        <p className='fav-excuse'>{excuse.excuse}</p>
      </div>
    )
  })
  return(
    <>
      <h3>Favorites:</h3>
      <div>{favoriteExcuses}</div>
      <Link to='/'>
        <button className='go-home'>Go Home</button>
      </Link>
    </>
  )
}

export default Favorites;