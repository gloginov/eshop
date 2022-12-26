var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../auth');
const db = require("../../db");

// Preload user profile on routes with ':username'
// router.param('username', function(req, res, next, username){
//   User.findOne({username: username}).then(function(user){
//     if (!user) { return res.sendStatus(404); }
//
//     req.profile = user;
//
//     return next();
//   }).catch(next);
// });
//
// router.get('/:username', auth.optional, function(req, res, next){
//   if(req.payload){
//     User.findById(req.payload.id).then(function(user){
//       if(!user){ return res.json({profile: req.profile.toProfileJSONFor(false)}); }
//
//       return res.json({profile: req.profile.toProfileJSONFor(user)});
//     });
//   } else {
//     return res.json({profile: req.profile.toProfileJSONFor(false)});
//   }
// });
//
// router.post('/:username/follow', auth.required, function(req, res, next){
//   var profileId = req.profile._id;
//
//   User.findById(req.payload.id).then(function(user){
//     if (!user) { return res.sendStatus(401); }
//
//     return user.follow(profileId).then(function(){
//       return res.json({profile: req.profile.toProfileJSONFor(user)});
//     });
//   }).catch(next);
// });
//
// router.delete('/:username/follow', auth.required, function(req, res, next){
//   var profileId = req.profile._id;
//
//   User.findById(req.payload.id).then(function(user){
//     if (!user) { return res.sendStatus(401); }
//
//     return user.unfollow(profileId).then(function(){
//       return res.json({profile: req.profile.toProfileJSONFor(user)});
//     });
//   }).catch(next);
// });


app.get('/tasks', async (req, res) => {
  try {
    const result = await db.pool.query("select * from tasks");
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const result = await db.pool.query("select * from tasks");
    res.send(result);
  } catch (err) {
    throw err;
  }
});

// POST
app.post('/tasks', async (req, res) => {
  let task = req.body;
  try {
    const result = await db.pool.query("insert into tasks (description) values (?)", [task.description]);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.put('/tasks', async (req, res) => {
  let task = req.body;
  try {
    const result = await db.pool.query("update tasks set description = ?, completed = ? where id = ?", [task.description, task.completed, task.id]);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.delete('/tasks', async (req, res) => {
  let id = req.query.id;
  try {
    const result = await db.pool.query("delete from tasks where id = ?", [id]);
    res.send(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;