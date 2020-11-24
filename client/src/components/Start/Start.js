import React from 'react'
import { Route, Redirect } from 'react-router-dom';
const Start = ({isLogin}) => {
  return (
    <section className="start">
      {/* <Route exact path="/">
        {!isLogin ? <Redirect to="/login" /> : <Redirect to='/age' />}
      </Route> */}
      <a href='/login'>
        <button className="start__btn">Start</button>
      </a>
    </section>
  )
}

export default Start;