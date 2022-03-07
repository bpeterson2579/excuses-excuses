import '../CSS/ExcuseCard.css';
import React from 'react';

const ExcuseCard = ({excuse, category, id, index, showProperStar}) => {

  return(
    <div className='excuse-card'>
      {category !== 'none' ? 
        <h3></h3>
      : <h3>{category.toUpperCase()}</h3>}
      <p className='excuse-text'>{index}) {excuse}</p>
      {showProperStar(excuse)}
    </div>
  )
}

export default ExcuseCard;