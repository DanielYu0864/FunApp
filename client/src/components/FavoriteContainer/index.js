import React, { useState, useEffect } from 'react'
import API from '../../utils/API';
function FavoriteContainer({favorite, user_id, backToOptions}) {
  //* set state
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [favoriteObj, setFavoriteObj] = useState({});
  //* delete the favorite from save list
  const deleteBtn = event => {
    event.preventDefault();
    let favoriteId = favoriteObj._id
    console.log(favoriteId);
    API.delete(favoriteId, userId)
      .then(e => {
        console.log(e);
        if(e.status === 200) alert('Item deleted!');
        backToOptions();
      })
      .catch(err => {
        console.error(err);
      })
  }
  //* re-render componet every time when state change
  //* ComponentDidUpdate
  useEffect(async () => {
    await setUserId(user_id);
    await setFavoriteObj(favorite);
    await setLoading(false);
  });
  //* check loading
  if(loading) {
    return <h1>Loading...</h1>
  }
  //* use iframe to display the data
  return (
    <section className='media'>
      <div className='medai__container'>
      <h2 className='media__title'>{favoriteObj.title}</h2>
      <iframe
        title={favoriteObj.title}
        className='media__display'
        title={favoriteObj.title}
        src={favoriteObj.imbedLink}
        scrolling={favoriteObj.scrolling}
        allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
      />
      <div className='media__buttons'>
        <button className='media__button' onClick={deleteBtn}>Remove</button>
      <button className='media__button' onClick={backToOptions}>Back</button>
      </div>
      </div>
    </section>

  )
}


export default FavoriteContainer
