import '../CSS/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <section className='nav-container'>
      <Link to='/form'>
        <div className='nav-div'>
          <button className='nav-button' id='generateQuote'>Generate Quote</button>
        </div>
      </Link>
      <Link to='/favorites'>
        <div className='nav-div'>
          <button className='nav-button' id='viewFavorites'>View Favorites</button>
        </div>
      </Link>
    </section>
  )
}

export default Nav;