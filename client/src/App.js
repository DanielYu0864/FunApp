import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// IMPORT COMPONENTS
import Register from './components/Forms/Register';
import Login from './components/Forms/Login.js';
import Start from './components/Start/Start';
import AgePicker from './components/Category/AgePicker';
import CategoryPicker from './components/Category/CategoryPicker';
import MediaPicker from './components/Category/MediaPicker';
import Navbar from './components/Navbar/Navbar';
import GameChoosePage from './pages/GameChoosePage';
import VideoChoosePage from './pages/VideoChoosePage';
import FavoritePage from './pages/FavoritePage';
import CategoryPage from './components/CategoryPage';


function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path='/category'>
            <CategoryPicker/>
          </Route>
          <Route exact path='/media'>
            <MediaPicker/>
          </Route>
          <Route exact path='/age'>
            <AgePicker/>
          </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
          <Route exact path='/game'>
            <GameChoosePage/>
          </Route>
          <Route exact path='/video'>
            <VideoChoosePage/>
          </Route>
          <Route exact path='/favorite'>
            <FavoritePage/>
          </Route>
          <Route exact path='/categorypage'>
            <CategoryPage/>
          </Route>
          <Route exact path='/'>
            <Start/>
          </Route>
        </Switch>
      </Router>



    </main>
  )
}

export default App;
