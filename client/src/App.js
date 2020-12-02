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
import UserContext from './utils/UserContext';

// export const UserContext = createContext({});

function App() {
  const [userId, setUserId] = useState({});
  // const user = 'Yu'
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
          {/* <UserContext.Provider value={{user}}> */}
            <Route exact path='/login'>
              <Login/>
            </Route>
          {/* </UserContext.Provider> */}

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
          <Route exact path='/'>
            <Start/>
          </Route>
        </Switch>
      </Router>



    </main>
  )
}

export default App;


// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false,
//       age: ''
//     }
//     console.log(this.state.age);
//   }

//   // afterLogin = () => {
//   //   this.setState({
//   //     isLogin: true
//   //   })
//   // }
//   checkAge = (age) => {
//     this.setState({
//       age: age
//     });
//   }

//   render() {
//     return (
//       <main>
//         <Router>
//           <Switch>
//             <Route exact path='/category'>
//               <CategoryPicker age='0-3'/>
//             </Route>
//             <Route exact path='/media/48'>
//               <MediaPicker age='4-8'/>
//             </Route>
//             <Route exact path='/media/912'>
//               <MediaPicker age='9-12'/>
//             </Route>
//             <Route exact path='/age'>
//               <AgePicker checkAge={this.checkAge} age={this.state.age}/>
//             </Route>
//             {/* <Route exact path="/login">
//               {!this.isLogin ? <Redirect to="/login" /> : <Redirect to='/age'/>}
//               <Login/>
//             </Route> */}
//             <Route exact path='/login'>
//               <Login/>
//             </Route>
//             <Route exact path='/register'>
//               <Register/>
//             </Route>
//             <Route exact path='/game'>
//               <GameChoosePage/>
//             </Route>
//             <Route exact path='/video'>
//               <VideoChoosePage/>
//             </Route>
//             <Route exact path='/favorite'>
//               <FavoritePage/>
//             </Route>
//             <Route exact path='/'>
//               <Start/>
//             </Route>
//           </Switch>
//         </Router>



//       </main>
//     )
//   }
// }