import React, {useState, useEffect} from 'react';
import TextInput from './TextInput';
import Button from './Button';
import API from '../../utils/API';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log('isLogin state changed')
  }, [isLogin]);
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
        if(e.data === 'logined') {
          alert('Logined!')
          setIsLogin(true)
        } else {
          alert(e.data)
          // console.log('something else: ' + e.data)
        }
      })
      .catch(err => {
        console.log(err)
      });

    }
  }

  //* if login redirect to age page
  if(isLogin) {
    return <Redirect push to="/age" />
  }
  return (
    <main>
      <Navbar color="purple" />
      <section className="form bg-green">
          <form onSubmit={handleSubmit}>
            <div className="form__grid">


                <div className="form__content">

                  {/* <TextInput type="email" label="Email Address" placeholder="hello@fun.com" /> */}


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


// export default class Login extends React.Component {

//   constructor(props) {
//     super(props);
//     console.log(props)
//     this.state = {
//       username: '',
//       password: '',
//       isLogin: true
//    }
//   }

//   componentDidUpdate() {
//     console.log('Component Did Update')
//     // forceUpdate()
//   }

//   handleInputChange = (event) => {
//     if(event.target.type === 'text') {
//       this.setState({
//         username: event.target.value
//       });
//       // console.log(this.state)
//     } else if(event.target.type === 'password') {
//       this.setState({
//         password: event.target.value
//       });
//       // console.log(this.state)
//     }
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     const {username, password} = this.state
//     // alert(`${ username } # ${ password }`);
//     if(!username || ! password) {
//       return;
//     } else {
//       let isLogin = false;
//       API.login({
//         username: username,
//         password: password
//       })
//       .then(e => {
//         console.log(e)
//         // console.log(e.request.responseURL)
//         // this.props.afterLogin()
//         this.setState({
//           isLogin: true
//         })
//         console.log(this.state)
//       })
//       .catch(err => {
//         console.log(err)
//       });

//     }
//   }
//   render() {
//     if(this.isLogin === true) {
//       // return <Redirect push to="/age" />
//       return <div>Page re-render</div>
//     } else {

//       console.log(this.state)
//       return (
//         // <div>Page before re-render</div>
//         <section className="form bg-green">
//           <form onSubmit={this.handleSubmit}>
//             <div className="form__grid">

//               <div className="form__content">

//                 {/* <TextInput type="email" label="Email Address" placeholder="hello@fun.com" /> */}

//                 <h2 style={{marginBottom:'18px'}}>Login</h2>
//                 <TextInput
//                   type="text"
//                   label="Username"
//                   placeholder="Your Username"
//                   value={this.state.username}
//                   handleInputChange={this.handleInputChange}
//                 />
//                 <TextInput
//                   type="password"
//                   label="Password"
//                   placeholder='Your password'
//                   value={this.state.password}
//                   handleInputChange={this.handleInputChange}
//                 />

//                 <Button type='submit' color="purple">Login</Button>

//                 <a href='/register'>
//                   Register
//                 </a>


//               </div>

//               <div className="form__image">
//                 <img src="/img/illustration.svg" alt="illustration of children having fun" />
//               </div>

//             </div>
//           </form>


//         </section>
//       )

//     }

//   }

// }