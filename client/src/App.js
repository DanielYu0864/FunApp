import React from 'react';

// IMPORT COMPONENTS
//import Register from './components/Forms/Register';
import Login from './components/Forms/Login.js';
//import Start from './Start/Start';
import Category from './components/Category/Category';
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


/*<Category type="content" items={{
  type: 'text',
  items: ['Games', 'Books', 'Videos']
}} />*/