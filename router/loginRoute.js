const path = require('path');
const db = require('../models');
module.exports = (app) => {
  app.post('/user/register', (req, res) => {
    //* Destructer the req.body
    const { username, password, email } = req.body;
    let errors = [];
    //* check if username and password not empty
    if (!username ||!password) {
      errors.push({ msg: 'Please enter all fields' });
    }
    //* check if password longer than 6
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
    //* check if no error
    if(errors.length > 0) {
      console.log(errors);
      res.json(errors)
    } else {
      //* check if there is on same email
      db.User
        .findOne({email: email})
        .then(emailData => {
          if(emailData) {
            res.json('email exists');
          } else {
          //* check if there is on same username
            db.User.findOne({username: username})
            .then(user => {
              if(user) {
                console.log('user already exists');
                res.json('user exists');
              } else {
                //* create a new user if none of them already exist
                db.User.create({
                  email: email,
                  username: username,
                  password: password
                })
                .then(data => {
                  console.log(data);
                  res.json(data);
                })
                .catch(err => {
                  console.log(err);
                  res.json(err);
                });
              }
            })
            .catch(err => console.log(err));
          }
        });
    }
  });
  app.post('/user/login', (req, res) => {
    //* Destructer the req.body
    const { username, password } = req.body;
    let errors = [];
    //* check if username and password are not empty
    if (!username ||!password) {
      errors.push({ msg: 'Please enter all fields' });
    }
    //* check if on error
    if(errors.length > 0) {
      console.log(errors);
    } else {
      //* find the user name
      db.User.findOne({
        username: username
      }).then(userInfo => {
        if(!userInfo) {
          res.json('no username')
        } else {
          //* check passwor
          if(userInfo.password === password) {
            res.json(userInfo);
          } else {
            res.json('password is not correct')
          }
        }

      });

    }

  });

}