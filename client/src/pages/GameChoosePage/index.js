import flash from 'express-flash';
import React, { useState, useEffect } from 'react'
import GamePage from '../../components/GamePage';
import gamesJSON from '../../utils/games.json';
import { useLocation } from 'react-router-dom';

function GameChoosePage() {
  const location = useLocation();
  const { age, user_id } = location.state;
  console.log('From GameChoosePage ',age, user_id)
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(true);
  const changeState = (gameList) => {
    let ageFilter = filterAge(gameList, age)
    setGameList([...ageFilter]);
    setLoading(false);
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

  useEffect(() => {
    let gameList = gamesJSON;
    changeState(gameList);
  },[])

  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <GamePage gameList={gameList} user_id={user_id}/>
    </div>
  )
}

export default GameChoosePage
