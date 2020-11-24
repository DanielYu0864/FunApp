import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Start = ({isLogin}) => {
  return (
    <main>
      <Navbar color="red" />
      <section className="start">
        {/* <Route exact path="/">
          {!isLogin ? <Redirect to="/login" /> : <Redirect to='/age' />}
        </Route> */}
        <a href='/login'>
          <button className="start__btn">Start</button>
        </a>
      </section>
    </main>
  )
}

export default Start;