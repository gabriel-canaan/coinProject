global.fetch = require('node-fetch')
const cc = require('cryptocompare')
const express = require('express')
const router = express.Router()

router.get('/coinPrice/:coin', (req, res) => {
  cc.histoHour(req.params.coin, 'USD').then(data => {
    console.log(data[data.length-1])
    console.log(data[data.length - 1].time - data[0].time);
    console.log(data.length);
    res.json(data)
  }).catch(console.error)
})

module.exports = router
