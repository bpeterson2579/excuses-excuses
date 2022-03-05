import '../CSS/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <section className='nav-container'>
      <Link to='/form'>
        <div className='nav-button'>
          <button>Generate Quote</button>
        </div>
      </Link>
      <Link to='/favorites'>
        <div className='nav-button'>
          <button>View Favorites</button>
        </div>
      </Link>
    </section>
  )
}

export default Nav;