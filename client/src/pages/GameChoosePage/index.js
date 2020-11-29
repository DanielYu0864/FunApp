import flash from 'express-flash';
import React, { Component } from 'react'
import GamePage from '../../components/GamePage';
import gamesJSON from '../../utils/games.json';

export class GameChoosePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
       gameList: [],
       loading: true
    }
  }

  changeState = (gameList) => {
    this.setState({
      gameList: [...gameList],
      loading: false
    })
  }

  componentDidMount() {
    let gameList = gamesJSON;
    this.changeState(gameList);
  }

  render() {
    if(this.state.loading) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <GamePage gameList={this.state.gameList}/>
      </div>
    )
  }
}

export default GameChoosePage
