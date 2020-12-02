import React, { useState, useEffect } from 'react'

function GameContainer({game, backToOptions}) {
  //* state
  const [gameObj, setGameObj] = useState();
  const [loading, setLoading] = useState(true);
  //* set state
  useEffect(() => {
    setGameObj(game);
    setLoading(false);
  });
  //* check loading
  if(loading||!gameObj) {
    return <h1>loading</h1>
  }
  //* render game
  return (
// <<<<<<< Faranak-views
  <section className="game">
    <div className="game__container">
      <h2 className="game__title">{gameObj.title}</h2>
      <iframe
        title={gameObj.title}
        className='game__display'
        title={gameObj.title}
        // width={gameObj.width}
        // height={gameObj.height}
        src={gameObj.imbedLink}
        scrolling={gameObj.scrolling}
        sandbox='allow-forms allow-scripts allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-top-navigation allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
      />
      <div className="game__buttons">
        <button className="game__button">Save</button>
        <button className="game__button" onClick={backToOptions}>Back</button>
      </div>
    </div>
  </section>
// =======
//   <div>
//     <h2>Title: <span>{gameObj.title}</span></h2>
//     <iframe
//       className='display'
//       title={gameObj.title}
//       // width={gameObj.width}
//       // height={gameObj.height}
//       src={gameObj.imbedLink}
//       scrolling={gameObj.scrolling}

//     />
//     <button>Save</button>
//     <button onClick={backToOptions}>Back</button>
//   </div>
// >>>>>>> main
  )
}

export default GameContainer
