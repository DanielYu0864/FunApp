import React from 'react';
import TextInput from './TextInput';
import Button from './Button';
import API from '../../utils/API'
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      username: '',
      password: '',
      isLogin: props.isLogin
   }
  }

  handleInputChange = (event) => {
    if(event.target.type === 'text') {
      this.setState({
        username: event.target.value
      });
      // console.log(this.state)
    } else if(event.target.type === 'password') {
      this.setState({
        password: event.target.value
      });
      // console.log(this.state)
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const {username, password} = this.state
    // alert(`${ username } # ${ password }`);
    if(!username || ! password) {
      return;
    } else {
      let isLogin = false;
      API.login({
        username: username,
        password: password
      })
      .then(e => {
        // console.log(e)
        // console.log(e.request.responseURL)
        // this.props.afterLogin()
        console.log(this.state)
      })
      .catch(err => {
        console.log(err)
      });

    }
  }
  render() {
    if(this.isLogin === true) {
      // return <Redirect push to="/age" />
      return <div>Page re-render</div>
    } else {
      console.log(this.state)
      return (
        <section className="form bg-green">
          <form onSubmit={this.handleSubmit}>
            <div className="form__grid">

              <div className="form__content">

                {/* <TextInput type="email" label="Email Address" placeholder="hello@fun.com" /> */}

                <h2 style={{marginBottom:'18px'}}>Login</h2>
                <TextInput
                  type="text"
                  label="Username"
                  placeholder="Your Username"
                  value={this.state.username}
                  handleInputChange={this.handleInputChange}
                />
                <TextInput
                  type="password"
                  label="Password"
                  placeholder='Your password'
                  value={this.state.password}
                  handleInputChange={this.handleInputChange}
                />

                <Button type='submit' color="purple">Login</Button>

                <a href='/register'>
                  Register
                </a>


              </div>

              <div className="form__image">
                <img src="/img/illustration.svg" alt="illustration of children having fun" />
              </div>

            </div>
          </form>


        </section>
      )

    }

  }

}