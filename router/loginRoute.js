const { userInfo } = require('os');
const path = require('path');
const db = require('../models');
module.exports = (app) => {
  app.post('/user/register', (req, res) => {
    console.log('Post called');
    console.log(req.body);
    const { username, password, email } = req.body;
    let errors = [];

    if (!username ||!password) {
      errors.push({ msg: 'Please enter all fields' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if(errors.length > 0) {
      console.log(errors);
      res.json(errors)
    } else {
      db.User.findOne({email: email})
      .then(emailData => {
        if(emailData) {
          console.log('email exists');
          res.json('email exists');
        } else {
          db.User.findOne({username: username})
          .then(user => {
            if(user) {
              console.log('user already exists');
              res.json('user exists');
            } else {
              db.User.create({
                email: email,
                username: username,
                password: password
              })
              .then(data => {
                console.log(data);
                // res.redirect('/login')
                res.json(data);
              })
              .catch(err => {
                // res.redirect('/register')
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
    console.log('login post called')
    console.log(req.body);
    const { username, password } = req.body;
    let errors = [];

    if (!username ||!password) {
      errors.push({ msg: 'Please enter all fields' });
    }

    // if (password.length < 6) {
    //   errors.push({ msg: 'Password must be at least 6 characters' });
    // }

    if(errors.length > 0) {
      console.log(errors);
    } else {
      db.User.findOne({
        username: username
      }).then(userInfo => {
        if(!userInfo) {
          console.log('no username');
          res.json('no username')
        } else {
          if(userInfo.password === password) {
            console.log(true)
            res.json('logined');
          } else {
            console.log('password is not correct')
            res.json('password is not correct')
          }
        }

      });

    }

  });

}