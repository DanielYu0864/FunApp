import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// IMPORT COMPONENTS
import Register from './components/Forms/Register';
import Login from './components/Forms/Login.js';
import Start from './components/Start/Start';
import AgePicker from './components/Category/AgePicker';
import CategoryPicker from './components/Category/CategoryPicker';
import MediaPicker from './components/Category/MediaPicker';
// import Login from './Login/Login';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
    console.log(this.state.isLogin);
  }

  afterLogin = () => {
    this.setState({
      isLogin: true
    })
  }

  render() {
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
              <Login
                isLogin={this.state.isLogin}
                afterLogin={this.afterLogin}
              />
            </Route>
            <Route exact path='/register'>
              <Register/>
            </Route>
            <Route exact path='/'>
              <Start/>
            </Route>
          </Switch>
        </Router>



      </main>
    )
  }
}