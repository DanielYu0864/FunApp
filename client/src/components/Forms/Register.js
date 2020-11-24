import React from 'react';
import TextInput from './TextInput';
import Button from './Button';
import API from '../../utils/API'
export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      registered: false
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
  //* handle input in diffent function
  // handleUsernameChange = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   });
  // };
  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   });

  // };

  handleSubmit = event => {
    event.preventDefault();
    const {username, password} = this.state
    // alert(`${ username } # ${ password }`);
    if(!username || ! password) {
      return username ? alert('Username can not be empty')
            :password ? alert('Password can not be empty')
            : '';
    } else if (password.length < 6) {
      return alert('Password has to be longer than 6')
    } else {
      API.register({
        username: username,
        password: password
      })
      .then(e => {
        if(e.data === 'user exists') {
          console.log(e.data);
          alert('username exists')
        } else {
          console.log(e)
          alert('account created')
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  render() {

    return (
      <section className="form">

        <form onSubmit={this.handleSubmit}>
        <div className="form__grid">

          <div className="form__content">
            <h2 style={{marginBottom:'18px'}}>Register</h2>
            <TextInput
              type="text"
              label="Username"
              placeholder="Your Username"
              value={this.state.username}
              // handleUsernameChange={this.handleUsernameChange}
              handleInputChange={this.handleInputChange}
            />
            {/* <TextInput type="email" label="Email Address" placeholder="hello@fun.com" /> */}
            <TextInput
              type="password"
              label="Password"
              placeholder='Your password'
              value={this.state.password}
              // handlePasswordChange={this.handlePasswordChange}
              handleInputChange={this.handleInputChange}
            />
            <a href='/login'>
              <Button color="purple">Create Account</Button>
            </a>
            <a href='/login'>
              Go Back to Login
            </a>


          </div>

          <div className="form__image">
            <img src="/img/register.png" alt="illustration of children having fun" />
          </div>

          </div>

          <div className="form__consent">
          <p>We do everything we can to provide appropriate entertainment on our app. The best way for you to keep your kids from exiting to other unapproved sites is to make sure that the settings on your device are appropriate for your family. We embed videos for YouTube and take all available steps to make sure that users can’t get to YouTube from “fun app.” To ensure your child cannot reach content you do not want them to see you should create an account and modify permissions. This will make it so they cannot access videos you deem inappropriate while logged in on the device they are using. We take the safety of our users very seriously. Please do your part to help safeguard your children against being able to access inappropriate content.</p>
          </div>
        </form>

      </section>
    )

  }

}