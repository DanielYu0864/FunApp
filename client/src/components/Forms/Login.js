import React, {useState, useEffect, useContext} from 'react';
import TextInput from './TextInput';
import Button from './Button';
import API from '../../utils/API';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  //* handle the input value
  const handleInputChange = (event) => {
    if(event.target.type === 'text') {
      setUsername(event.target.value);
    } else if(event.target.type === 'password') {
      setPassword(event.target.value);
    }
  }
  //* handle the login check and api call
  const handleSubmit = event => {
    event.preventDefault();
    if(!username || ! password) {
      return !username ? alert('Username can not be empty')
        : alert('Password can not be empty');
    } else {
      API.login({
        username: username,
        password: password
      })
      .then(e => {
        console.log(e)
        if(e.data.username === username) {
          alert('Logged in!');
          setUserId(e.data._id);
          setIsLogin(true)
        } else {
          alert(e.data)
        }
      })
      .catch(err => {
        console.log(err)
      });

    }
  }

  //* componentDidUpdate -> re-render every time when isLogin state change
  useEffect(() => {
    console.log('isLogin state changed')
  }, [isLogin]);

  //* if login redirect to age page
  if(isLogin) {
    return <Redirect push to={{pathname: "age",
    state: { user_id: userId }}} />
  }
  return (
    <main>
      <Navbar color="purple"/>
      <section className="form bg-green">
          <form onSubmit={handleSubmit}>
            <div className="form__grid">

                <div className="form__content">

                <h2 style={{marginBottom:'18px'}}>Login</h2>
                <TextInput
                  type="text"
                  label="Username"
                  placeholder="Your Username"
                  value={username}
                  handleInputChange={handleInputChange}
                />
                <TextInput
                  type="password"
                  label="Password"
                  placeholder='Your password'
                  value={password}
                  handleInputChange={handleInputChange}
                />

                  <Button type='submit' color="purple">Login</Button>

                  <p className="form__alt-link"><a href='/register'>Register</a></p>

                </div>

                <div className="form__image">
                  <img src="/img/illustration.svg" alt="illustration of children having fun" />
                </div>

              </div>
            </form>

        </section>
      </main>
  )
}

export default Login
