import '../CSS/ExcuseCard.css';
import React from 'react';

const ExcuseCard = ({excuses, category, id, index, addToFavorites, removeFromFavorites, favExcuses}) => {
  const favBtn = favExcuses.map(excuse => {
    if(excuse.excuse.includes(excuses)) {
      return <button className='fav-star' onClick={() => removeFromFavorites(id)}>★</button>
    }else {
      return <button className='not-fav-star' onClick={() => addToFavorites()}>✩</button>
    }
  })

  return(
    <div className='excuse-card'>
      {category !== 'none' ? 
        <h3></h3>
      : <h3>{category.toUpperCase()}</h3>}
      <p className='excuse-text'>{index}) {excuses}</p>
      {favBtn}
    </div>
  )
}

export default ExcuseCard;