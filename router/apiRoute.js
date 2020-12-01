const db = require('../models');
const { findByIdAndUpdate } = require('../models/User');

module.exports = (app) => {
  //! API for age
  // app.get('/api/age', async (req, res) => {
  //   await db.Age.find({}).then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(400).json(err);
  //   });
  // });
  // app.post('/api/age', async (req, res) => {
  //   await db.Age.create({
  //     data_user_age: 'user age',
  //     data_name: 'name',
  //     data_type: 'type',
  //     data_info: {
  //       "url" : "youtube.com"
  //     }
  //   })
  //   .then(data => {
  //     console.log(data);
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   })
  // });
  // app.put('/api/age/:id', async ({body, params}, res) => {
  //   await db.Age.findByIdAndUpdate(params.id, {$set: {
  //     data_user_age: body.age,
  //     data_name: body.name,
  //     data_type: body.type,
  //     data_info: body.info
  //   }})
  //   .then(data => {
  //     console.log('added', data);
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     console.log('failed', err);
  //     res.status(400).json(err);
  //   })
  // });
  // //! API for topic
  // app.get('/api/topic', async (req, res) => {
  //   await db.Topic.find({}).then(data => {
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(400).json(err);
  //   });
  // });
  // app.post('/api/topic', async (req, res) => {
  //   await db.Topic.create({
  //     date_user_age: 'uer age',
  //     data_name: 'data name',
  //     data_topic: 'topic',
  //     date_type: 'data type',
  //     date_info: {
  //       "url" : "google.com"
  //     }
  //   })
  //     .then(data => {
  //       console.log(data);
  //       res.status(200).json(data);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });
  // app.put('/api/topic/:id', async ({body, params}, res) => {
  //   await db.Topic.findByIdAndUpdate(params.id, {$set: {
  //     data_user_age: body.age,
  //     data_name: body.name,
  //     data_topic: body.topic,
  //     data_type: body.type,
  //     data_info: body.info
  //   }})
  //   .then(data => {
  //     console.log('added', data);
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     console.log('failed', err);
  //     res.status(400).json(err);
  //   })
  // });


  //? API call for user
  app.get('/api/user', async (req, res) => {
    await db.User.find({}).then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  });
  //? API call for favorite
  app.get('/api/favorite', async (req, res) => {
    await db.Favorites.find({}).then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  });
  //? API call for save data to favorite list
  app.post('/api/favorite/save/:id', async ({ body, params }, res) => {
    await db.Favorites.create(body)
      .then(({ _id }) => db.User.findByIdAndUpdate(params.id, { $push: { favorites: _id } }, { new: true }))
      // .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { favorites: _id } }, { new: true }))
      .then(dbUser => {
        console.log(dbUser);
        res.status(200).json(dbUser);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      })
  })
  //? API call for get data from favorite list
  app.get('/api/favorite/user/:id', async({ body, params }, res) => {
    await db.User.findById(params.id)
      .then(dbUser => {
        return  dbUser.favorites
      })
      .then(_id => {
        db.Favorites.find({_id:{$in:[..._id]}})
          .then(data => {
            console.log(data);
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
      })
      .catch(err => {
        res.status(400).json(err);
      })
  })
}