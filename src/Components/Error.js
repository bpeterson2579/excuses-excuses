import '../CSS/Error.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return(
    <section className='error'>
      <p>Something has gone wrong, press button to return home</p>
      <Link to='/'>
        <button>Go Home</button>
      </Link>
    </section>
  )
}

export default Error;