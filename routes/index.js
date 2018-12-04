const express = require('express');
const router  = express.Router();
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/',(req,res,next)=>{
  console.log(req.body.email)
  // res.render('signup')
  User.create(req.body)
  .then(user=>{
    res.redirect('/')
  })
  .catch(e=>console.log(e))
})

module.exports = router;
