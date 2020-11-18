const { userInfo } = require('os');
const path = require('path');
const db = require('../models');
module.exports = (app) => {
  app.get('/age-group', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/age-group.html'));
  });
  app.get('/user/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/login.html'));
  });
  app.get('/user/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/register.html'));
  });
  app.post('/user/register', (req, res) => {
    console.log('Post called');
    console.log(req.body);
    const { username, password } = req.body;
    let errors = [];

    if (!username ||!password) {
      errors.push({ msg: 'Please enter all fields' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if(errors.length > 0) {
      console.log(errors);
    } else {
      // db.User.findOne({username: username})
      //   .then(user => {
      //     if(user) {
      //       console.log('Email already exists');
      //       res.redirect('/user/register')
      //     } else {

      //     }
      //   }).catch(err => console.log(err));
      db.User.create({
        username: username,
        password: password
      })
      .then(data => {
        console.log(data);
        res.redirect('/user/login')
      })
      .catch(err => {
        res.redirect('/user/register')
        console.log(err);
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

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }

    if(errors.length > 0) {
      console.log(errors);
    } else {
      db.User.findOne({
        username: username
      }).then(userInfo => {
        if(!userInfo) {
          console.log('no username');
        } else {
          if(userInfo.password === password) {
            res.redirect('/age-group');
          } else {
            console.log('password is not correct')
          }
        }

      });

    }

  });

}