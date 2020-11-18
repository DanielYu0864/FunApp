import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className="form">

      <div className="form__grid">

        <div className="form__content">

          <TextInput label="Name" placeholder="Your Name" />
          <TextInput type="email" label="Email Address" placeholder="hello@fun.com" />
          <TextInput type="password" label="Password" />
          <Button color="purple">Create Account</Button>

        </div>

        <div className="form__image">
          <img src="/img/register.png" alt="illustration of children having fun" />
        </div>

      </div>

      <div className="form__consent">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga modi magnam minus aspernatur illo, cum quisquam, ea recusandae laboriosam magni cumque voluptatibus ullam, rerum omnis quos vitae laborum. Omnis!</p>
      </div>

      </section>
    )

  }

}