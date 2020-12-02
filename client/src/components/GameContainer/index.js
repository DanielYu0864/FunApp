import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
// import './style.scss';

function GameContainer({game, backToOptions, user_id}) {
  //* state
  const [userId, setUserId] = useState();
  const [gameObj, setGameObj] = useState();
  const [loading, setLoading] = useState(true);
  const saveGame = event => {
    event.preventDefault();
    console.log('User ID: ' + userId);
    let gameObject = {
      age: gameObj.age,
      type: gameObj.type,
      title: gameObj.title,
      imbedLink: gameObj.imbedLink,
      width: gameObj.width,
      height: gameObj.height,
      scrolling: gameObj.scrolling
    };
    // console.log('Game Object:', {age: gameObj.age, title: gameObj.title, imbedLink: gameObj.imbedLink, width: gameObj.width, height: gameObj.height, scrolling: gameObj.scrolling});
    console.log(gameObject);
    API.save(gameObject, userId)
      .then(e => {
        console.log(e);
        if(e.status === 200) alert('Game Save!');
      })
      .catch(err => {
        console.error(err);
      })
  }
  //* set state
  useEffect(() => {
    setUserId(user_id);
    setGameObj(game);
    setLoading(false);
    console.log('From Game Container: ', userId);
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
        <button className="game__button" onClick={saveGame}>Save</button>
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
