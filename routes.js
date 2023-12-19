const express = require('express');
const router = express.Router();

// Provide an /add endpoint followed by 2 values that will be added. Result is returned
// in JSON format
router.get('/add/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var sum = (num1 + num2).toString()
    res.json(sum)
})

// Provide an /subtract endpoint followed by 2 values that will be added. Result is returned
// in JSON format
router.get('/subtract/:num1/:num2', function (req, res) {
  // TODO
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var difference = (num1 - num2).toString()
    res.json(difference)

router.get('/divide/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = (num1 / num2).toString()
  res.json(sum)

})

router.get('/multiply/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = (num1 * num2).toString()
  res.json(sum)
})
router.get('/power/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = Math.pow(num1, num2).toString()
  res.json(sum)
})

module.exports = router