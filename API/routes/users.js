const express = require('express');
const router = express.Router();

const Users  = require('../models/Users');
/* GET users listing. */
router.get('/', async (req, res, next) => {
  let users = null;
  try {
    users = await Users.find({}).lean().exec();
  } catch(err) {
    next(err)
  }

  res.json(users)
});

router.post('/', async (req, res, next) => {
  let user = null;
  try {
    user = await Users.create(req.body)
  } catch(err) {
    next(err)
  } 

  req.json(user)
})

router.put('/', async (req, res, next) => {
  let user = null;
  const id = req.body._id
  delete req.body._id
  try {
    user = await Users.findByIdAndUpdate(id, req.body, {new: true})
  } catch(err) {
    next(err)
  }
  res.json(user)
})


router.delete('/', async (req, res, next) => {
  let users = null;
  try {
    await Users.findByIdAndRemove(req.body.id)
    users = await Users.findById(req.body.id)
  } catch(err) {
    next(err)
  }
})


module.exports = router;
