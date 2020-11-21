import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className="form bg-green">

      <div className="form__grid">

        <div className="form__content">

          <TextInput type="email" label="Email Address" placeholder="hello@fun.com" />
          <TextInput type="password" label="Password" />

          <a href='/age'>
            <Button color="purple">Login</Button>
          </a>
          <a href='/register'>
            <Button color="purple">Register</Button>
          </a>


        </div>

        <div className="form__image">
          <img src="/img/illustration.svg" alt="illustration of children having fun" />
        </div>

      </div>

      </section>
    )

  }

}