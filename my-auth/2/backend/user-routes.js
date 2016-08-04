// import express from 'express';
// import _ from 'lodash';
// import config from './config';
// import jwt from 'jsonwebtoken';
var express          = require('express');
var    _          = require('lodash');
var    config          = require('./config');
var    jwt          = require('jsonwebtoken');


var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}];

var createToken = (user) => jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });

app.post('/users', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("You must send the username and the password");
  }
  if (_.find(users, {username: req.body.username})) {
   res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, 'username', 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);

  res.status(201).send({
    id_token: createToken(profile)
  });
});

// app.get('/users', function (req, res) {
//     if (_.find(users, {username: req.body.username})) {
//       return res.json({user: result, status: {success: 'Ok', error: null}});
//     } else {
//       res.json({user: null, status: {success: null, error: 'error'}});
//     }
// });
// app.get('/users', function (req, res) {
//   // res.send('USER');
//   return res.json({user: result, status: {success: 'Ok', error: null}});
// });

app.post('/sessions/create', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, {username: req.body.username});
  if (!user) {
    res.status(401).send("The username or password don't match");
  }

  if (!(user.password === req.body.password)) {
    res.status(401).send("The username or password don't match");
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});
