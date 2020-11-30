import React, { useState, useEffect } from 'react'
import './style.scss';

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
  <section className="game">
    <div className="game__container">
      <h2 className="game__title">{gameObj.title}</h2>
      <iframe
        className='game__display'
        title={gameObj.title}
        // width={gameObj.width}
        // height={gameObj.height}
        src={gameObj.imbedLink}
        scrolling={gameObj.scrolling}
      />
      <div className="game__buttons">
        <button className="game__button">Save</button>
        <button className="game__button" onClick={backToOptions}>Back</button>
      </div>
    </div>
  </section>
  )
}

export default GameContainer
