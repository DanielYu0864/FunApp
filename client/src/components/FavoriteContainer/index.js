import React, { useState, useEffect } from 'react'
import API from '../../utils/API';
function FavoriteContainer({favorite, user_id, backToOptions}) {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [favoriteObj, setFavoriteObj] = useState({});
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
  useEffect(() => {
    setUserId(user_id);
    setFavoriteObj(favorite);
    setLoading(false);
  });

  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>{favoriteObj.title}</h1>
      <iframe
        title={favoriteObj.title}
        className='game__display'
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
      <button onClick={deleteBtn}>Remove</button>
      <button onClick={backToOptions}>Back</button>
    </div>
  )
}

export default FavoriteContainer
