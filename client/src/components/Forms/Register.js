import React, {useEffect, useState} from 'react';
import TextInput from './TextInput';
import Button from './Button';
import API from '../../utils/API'
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';


export function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    // console.log(isRegister);
    if(isRegister) console.log('is register!')
  }, [isRegister])
  //* handle the input value
  const handleInputChange = (event) => {
    // console.log(event.target)
    let name = event.target.name
    switch(name){
      case 'email':
        setEmail(event.target.value);
      break;
      case 'username':
        setUsername(event.target.value);
      break;
      case 'password':
        setPassword(event.target.value);
      break;
      case 'password2':
        setPassword2(event.target.value);
      break;
      default:
        break;
    };
  }
  //* handle register check and api call
  const handleSubmit = event => {
    event.preventDefault();
    if(!email ||!username || ! password || !password2) {
      return !email ?  alert('Email can not be empty')
            : !username ? alert('Username can not be empty')
            : !password ? alert('Password can not be empty')
            : !password2 ? alert('Password can not be empty'): ''
    }

    if (password.length < 6) {
      return alert('Password has to be longer than 6')
    }

    if (password !== password2) {
      return alert('Password has to be the same')
    } else {
      API.register({
        email: email,
        username: username,
        password: password
      })
      .then(e => {
        if(e.data === 'user exists') {
          // console.log(e.data);
          alert('username exists')
        } else if(e.data === 'email exists') {
          // console.log(e.data);
          alert('email exists')
        } else {
          // console.log(e)
          alert('account created')
          setIsRegister(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  //* check if registered
  if(isRegister) {
    return<Redirect push to="/login" />
  }
  return (
    <main>
      <Navbar/>
      <section className="form">
        <form onSubmit={handleSubmit}>
        <div className="form__grid">

          <div className="form__content">
            <h2 style={{marginBottom:'18px'}}>Register</h2>
            <TextInput
              name='email'
              type="email"
              label="Email Address"
              placeholder="hello@fun.com"
              value={email}
              handleInputChange={handleInputChange}
            />

            <TextInput
              name='username'
              type="text"
              label="Username"
              placeholder="Your Username"
              value={username}
              handleInputChange={handleInputChange}
            />
            <TextInput
              name='password'
              type="password"
              label="Password"
              placeholder='Your password'
              value={password}
              handleInputChange={handleInputChange}
            />
            <p style={{fontSize: '10px', position: 'relative', bottom: '24px'}}>Passwords must be at least 6 characters. </p>
            <TextInput
              name='password2'
              type="password"
              label="Re-enter Password"
              placeholder='Confirm your password'
              value={password2}
              handleInputChange={handleInputChange}
            />

            <Button color="purple">Create Account</Button>
            <p className="form__alt-link"><a href='/login'>Go Back to Login</a></p>


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
    </main>
  )
}

export default Register



// export default class Register extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       username: '',
//       password: '',
//       password2: '',
//       registered: false
//    }
//   }

//   handleInputChange = (event) => {
//     console.log(event.target)
//     let name = event.target.name
//     switch(name){
//       case 'email':
//         this.setState({
//           email: event.target.value
//         })
//       break;
//       case 'username':
//         this.setState({
//           username: event.target.value
//         })
//       break;
//       case 'password':
//         this.setState({
//           password: event.target.value
//         })
//       break;
//       case 'password2':
//         this.setState({
//           password2: event.target.value
//         })
//       break;
//       default:
//         break;
//     }


//   handleSubmit = event => {
//     event.preventDefault();
//     const {email, username, password, password2} = this.state
//     // alert(`${ username } # ${ password }`);
//     if(!email ||!username || ! password || !password2) {
//       return !email ?  alert('Email can not be empty')
//             : !username ? alert('Username can not be empty')
//             : !password ? alert('Password can not be empty')
//             : !password2 ? alert('Password can not be empty'): ''
//     }

//     if (password.length < 6) {
//       return alert('Password has to be longer than 6')
//     }

//     if (password !== password2) {
//       return alert('Password has to be the same')
//     } else {
//       API.register({
//         email: email,
//         username: username,
//         password: password
//       })
//       .then(e => {
//         if(e.data === 'user exists') {
//           console.log(e.data);
//           alert('username exists')
//         } else if(e.data === 'email exists') {
//           console.log(e.data);
//           alert('email exists')
//         } else {
//           console.log(e)
//           alert('account created')
//         }
//       })
//       .catch(err => {
//         console.log(err)
//       })
//     }
//   }

//   render() {

//     return (
//       <section className="form">

//         <form onSubmit={this.handleSubmit}>
//         <div className="form__grid">

//           <div className="form__content">
//             <h2 style={{marginBottom:'18px'}}>Register</h2>
//             <TextInput
//               name='email'
//               type="email"
//               label="Email Address"
//               placeholder="hello@fun.com"
//               value={this.state.email}
//               handleInputChange={this.handleInputChange}
//             />

//             <TextInput
//               name='username'
//               type="text"
//               label="Username"
//               placeholder="Your Username"
//               value={this.state.username}
//               handleInputChange={this.handleInputChange}
//             />
//             <TextInput
//               name='password'
//               type="password"
//               label="Password"
//               placeholder='Your password'
//               value={this.state.password}
//               handleInputChange={this.handleInputChange}
//             />
//             <p style={{fontSize: '10px', position: 'relative', bottom: '24px'}}>Passwords must be at least 6 characters. </p>
//             <TextInput
//               name='password2'
//               type="password"
//               label="Re-enter Password"
//               placeholder='Confirm your password'
//               value={this.state.password2}
//               handleInputChange={this.handleInputChange}
//             />
//               <Button color="purple">Create Account</Button>
//             <a href='/login'>
//               Go Back to Login
//             </a>


//           </div>

//           <div className="form__image">
//             <img src="/img/register.png" alt="illustration of children having fun" />
//           </div>

//           </div>

//           <div className="form__consent">
//           <p>We do everything we can to provide appropriate entertainment on our app. The best way for you to keep your kids from exiting to other unapproved sites is to make sure that the settings on your device are appropriate for your family. We embed videos for YouTube and take all available steps to make sure that users can’t get to YouTube from “fun app.” To ensure your child cannot reach content you do not want them to see you should create an account and modify permissions. This will make it so they cannot access videos you deem inappropriate while logged in on the device they are using. We take the safety of our users very seriously. Please do your part to help safeguard your children against being able to access inappropriate content.</p>
//           </div>
//         </form>

//       </section>
//     )

//   }

// }