import React from 'react';

// IMPORT COMPONENTS
//import Register from './components/Forms/Register';
import Login from './components/Forms/Login.js';
//import Start from './Start/Start';
//import AgePicker from './components/Category/AgePicker';
//import CategoryPicker from './components/Category/CategoryPicker';
//import MediaPicker from './components/Category/MediaPicker';
import Navbar from './components/Navbar/Navbar';
import Login from './Login/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Navbar color="purple" />
        <Login />
      </main>
    )
  }
}