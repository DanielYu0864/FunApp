import React, { useState, useEffect } from 'react'

function FavoriteContainer({favorite, backToOptions}) {
  const [loading, setLoading] = useState(true);
  const [favoriteObj, setFavoriteObj] = useState({});

  useEffect(() => {
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
      <button onClick={backToOptions}>Back</button>
    </div>
  )
}

export default FavoriteContainer
