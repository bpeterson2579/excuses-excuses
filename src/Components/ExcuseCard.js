import '../CSS/ExcuseCard.css';
import React from 'react';

const ExcuseCard = ({excuse, category, id, index, addToFavorites, removeExcuse}) => {
  const excuseCard = {
    id: id,
    excuse: excuse,
    category: category
  }

  return(
    <div className='excuse-card'>
      {category !== 'none' ? 
        <h3></h3>
      : <h3>{category.toUpperCase()}</h3>}
      <p className='excuse-text'>{index}) {excuse}</p>
      <button className='fav-button' onClick={() => addToFavorites(excuseCard)}>★</button>
      <button className='remove-button' onClick={() => removeExcuse(id)}>🗑</button>
    </div>
  )
}

export default ExcuseCard;