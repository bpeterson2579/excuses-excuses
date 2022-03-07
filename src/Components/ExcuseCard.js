import '../CSS/ExcuseCard.css';
import React from 'react';

const ExcuseCard = ({excuses, category, id, index, removeExcuse}) => {

  return(
    <div className='excuse-card'>
      {category !== 'none' ? 
        <h3></h3>
      : <h3>{category.toUpperCase()}</h3>}
      <p className='excuse-text'>{index}) {excuses}</p>
      <button className='remove-button' onClick={() => removeExcuse(id)}>🗑</button>
    </div>
  )
}

export default ExcuseCard;