import React, { useState, useEffect } from 'react'
import GamePage from '../../components/GamePage';
import gamesJSON from '../../utils/games.json';
import { useLocation, Link } from 'react-router-dom';
import FavoriteButton from '../../components/FavoriteButton';

function GameChoosePage() {
  const location = useLocation();
  const { age, user_id } = location.state;
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);
  //* make sure datas are load
  const changeState = async (gameList) => {
    let ageFilter = await filterAge(gameList, age)
    await setGameList([...ageFilter]);
    await setLoading(false);
  };
  //* function for filter the game list by user age
  const filterAge = (inputArr, inputAge) => {
    const outputArr = [];
    for(let i = 0; i < inputArr.length; i++) {
      let age = inputArr[i].age.split(', ').filter(e => e === inputAge || e === 'all').join('');
      if(age === inputAge || age === 'all') outputArr.push(inputArr[i]);
    }
    return outputArr;
  }
  //* ComponentDidMount
  useEffect(() => {
    let gameList = gamesJSON;
    changeState(gameList);
  },[])
  //* check if page loaded
  if(loading) {
    return <h1>Loading...</h1>
  }
  //* map loop through every object in the array
  return (
    <div>
      <GamePage gameList={gameList} user_id={user_id}/>
      <Link to={{ pathname: '/media', state: { age: age, user_id: user_id } }}>
        <button>Back to media</button>
      </Link>
      <Link to={{ pathname: '/favorite', state: { user_id: user_id } }}>
        <FavoriteButton/>
      </Link>
    </div>
  )
}

export default GameChoosePage
