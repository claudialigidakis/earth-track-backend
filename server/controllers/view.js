const model = require('../models/view')

function create(req, res, next) {
  if (!req.body.latitude || !req.body.longitude) {
    return next({status: 400, message: 'Missing parameters'})
  }
  model.create(req.body.latitude, req.body.longitude)
  .then(data => {
    console.log(data)
    res.status(200).send(data)
  })
  .catch(next)
}

module.exports = {
  create
}
