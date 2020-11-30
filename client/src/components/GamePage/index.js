import React, {useState, useEffect}from 'react'
import GameContainer from '../GameContainer';
// <<<<<<< Faranak-views
import Button from '../Category/Button';
import Navbar from '../Navbar/Navbar';

// =======
import FavoriteButton from '../FavoriteButton';
// >>>>>>> main
function GamePage({gameList}) {
  // console.log(gameList)
  //* set state
  const [loading, setLoading] = useState(true);
  const [gameArr, setGameArr] = useState([]);
  const [game, setGame] = useState({});
  const [gameChoose, setGameChoose] = useState(false);
  //* re-render component everytime when state changed
  useEffect(() => {
    if(gameList !== []) {
      checkLoading();
    }
  });
  //* re-render component when game chose
  useEffect(() => {
    checkLoading();
  }, [gameChoose]);
  //* re-render component when game chose
  useEffect(() => {
    checkLoading();
    // console.log('re-render')
  }, [game])
  //* make sure loading properly
  const checkLoading = async () => {
    await setGameArr(gameList);
    await setLoading(false);
    // console.log(gameArr)
  }
  //* change game state to the game data when button click
  const gameChosen = async (id) => {
    let gameInfo = gameArr.filter(e => e.id === id);
    // console.log(gameInfo);
    await setGame(gameInfo[0]);
    await setGameChoose(true);
  };
  //* back to the game choose page
  const backToOptions = async () => {
    await setGameChoose(false);
  }
  //* check loading
  if(loading === true) {
    return <h1>Loading ...</h1>
  }
  //* check game chose
  if(gameChoose) {
    return <GameContainer
      game={game}
      backToOptions={backToOptions}
    />
  }
  //* else render button
  return (

    <main>
        <Navbar color="white" />
        <section className="category games">
            <div className="category__container">
                {
                  gameArr.map(e => (
                    <Button onClick={() => gameChosen(e.id)} key={e.id}>{e.title}</Button>
                  ))
                }
            </div>
        </section>
    </main>

  )


  /*
  <div>
      <h2>Game List</h2>
// <<<<<<< Faranak-views
      //{
       // gameArr.map(e => (
          //<button onClick={() => gameChosen(e.id)} key={e.id}>
           // {e.title}
// =======
      <a href='/favorite'><FavoriteButton/></a>
      {
        gameArr.map(e => (
          <button onClick={() => gameChosen(e.id)} key={e.id}>
            {e.title}
// >>>>>>> main
          </button>
       // ))
     // }
    </div>

  */

}

export default GamePage
