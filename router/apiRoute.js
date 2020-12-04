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
    //* create the new favorite
    await db.Favorites
      .create(body)
      //* find user by id and add the new favorite item to the favorite list
      .then(({ _id }) => db.User.findByIdAndUpdate(params.user_id, { $push: { favorites: _id } }, { new: true }))
      .then(dbUser => {
        res.status(200).json(dbUser);
      })
      .catch(err => {
        console.error(err);
        res.status(400).json(err);
      });
  });
  //? API call for get data from favorite list
  app.get('/api/favorite/get/:user_id', async({ body, params }, res) => {
    //* 1. find user_id
    await db.User
      .findById(params.user_id)
      .then(dbUser => {
        //* 2. find user favorite list
        return  dbUser.favorites
      })
      .then(_id => {
        //* 3. find all favorite data that in the user favorite list
        db.Favorites
          .find({_id:{$in:[..._id]}})
          .then(data => {
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
    await db.Favorites
    //* get the favorite_id from the req.body
      .find({_id:body.favorite_id})
      .then(data => {
        //* get the user_id from the req.params
        db.User.findByIdAndUpdate(params.user_id, { $pull:  {favorites: body.favorite_id} })
        .then(e => console.log('After delet!: ', e))
        .catch(err => console.error(err));
        data.remove();
      })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  })
}