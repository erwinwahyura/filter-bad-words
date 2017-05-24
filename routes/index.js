var express = require('express')
var router = express.Router()
var Filter = require('bad-words');
var badwords = require('../utils/dictionary.js')

// router.get('/', function(req, res) {
//   var Filter = require('bad-words');
//   var customFilter = new Filter({ placeHolder: 'x'});
//
//   var data = customFilter.clean('Dont be an ash0le'); //Don't be an xxxxxx
//   res.send(data)
// })


router.get('/', function(req, res) {
  var filter = new Filter();
  filter.addWords(badwords)
  // console.log(filter);
  // filter.addWords(['some', 'bad', 'word']);
  var words = filter.clean("idiot bad word!") //**** *** ****!
  console.log(words);
  res.send(words)
})



module.exports = router;