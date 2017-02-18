const events = require('../models/events.model')

module.exports = {

  // GET all users
  getAllEvents : (req, res) => {
    events.find( {}, {__v : false}, (err, data) =>{
      res.send(data)
    })
  },

  // CREATE a user
  createEvent : (req, res) => {
    let newEvent = events({
      title    : req.body.title,
      eventName: req.body.eventname,
      // date     : req.body.date,
      email    : req.body.email
    })
    newEvent.save((err,create) =>{
      if (err) {
        var errMsg = ""
        if (err.errors.email) {
          errMsg += err.errors.email.message + "\n"
          console.log("1");
        }
        if (err.errors.eventName) {
          errMsg += err.errors.eventName.message + "\n"
          console.log("2");
        }
        if (err.errors.title) {
          errMsg += err.errors.title.message + "\n"
          console.log("3");
        }
        console.log(errMsg);
        res.send(errMsg)
      }
      else {
        res.json({create})
      }
    })
  }

}
