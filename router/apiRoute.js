const db = require('../models');

module.exports = (app) => {

  //? API call for user
  app.get('/api/user', async (req, res) => {
    await db.User
      .find({})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  //? API call for favorite
  app.get('/api/favorite', async (req, res) => {
    await db.Favorites
      .find({})
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  //? API call for save data to favorite list
  app.post('/api/favorite/save/:user_id', async ({ body, params }, res) => {
    await db.Favorites
      .create(body)
      .then(({ _id }) => db.User.findByIdAndUpdate(params.user_id, { $push: { favorites: _id } }, { new: true }))
      .then(dbUser => {
        // console.log(dbUser);
        res.status(200).json(dbUser);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  });
  //? API call for get data from favorite list
  app.get('/api/favorite/get/:user_id', async({ body, params }, res) => {
    await db.User
      .findById(params.user_id)
      .then(dbUser => {
        return  dbUser.favorites
      })
      .then(_id => {
        db.Favorites
          .find({_id:{$in:[..._id]}})
          .then(data => {
            // console.log(data);
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          })
      })
      .catch(err => {
        res.status(400).json(err);
      })
  });
  //? API call for delete the favorite item from favorite list
  app.delete('/api/favorite/delete/:user_id', async({ body, params }, res) => {
    // console.log(body.favorite_id);
    // console.log(params.user_id);
    await db.Favorites
      .find({_id:body.favorite_id})
      .then(data => {
        db.User.findByIdAndUpdate(params.user_id, { $pull:  {favorites: body.favorite_id} })
        .then(e => console.log('After delet!: ', e))
        .catch(err => console.error(err));
        data.remove();
      })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  })
}