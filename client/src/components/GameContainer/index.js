import React, { useState, useEffect } from 'react'
import './style.css';

function GameContainer({game, backToOptions}) {
  //* state
  const [gameObj, setGameObj] = useState();
  const [loading, setLoading] = useState(true);
  //* set state
  useEffect(async () => {
    await setGameObj(game);
    await setLoading(false);
  });
  //* check loading
  if(loading||!gameObj) {
    return <h1>loading</h1>
  }
  //* render game
  return (
  <div>
    <h2>Title: <span>{gameObj.title}</span></h2>
    <iframe
      className='display'
      title={gameObj.title}
      // width={gameObj.width}
      // height={gameObj.height}
      src={gameObj.imbedLink}
      scrolling={gameObj.scrolling}
      sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'

    />
    <button>Save</button>
    <button onClick={backToOptions}>Back</button>
  </div>
  )
}

export default GameContainer
