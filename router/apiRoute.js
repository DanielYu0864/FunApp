const db = require('../models');

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
}