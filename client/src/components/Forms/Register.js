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
        <p>We do everything we can to provide appropriate entertainment on our app. The best way for you to keep your kids from exiting to other unapproved sites is to make sure that the settings on your device are appropriate for your family. We embed videos for YouTube and take all available steps to make sure that users can’t get to YouTube from “fun app.” To ensure your child cannot reach content you do not want them to see you should create an account and modify permissions. This will make it so they cannot access videos you deem inappropriate while logged in on the device they are using. We take the safety of our users very seriously. Please do your part to help safeguard your children against being able to access inappropriate content.</p>
      </div>

      </section>
    )

  }

}