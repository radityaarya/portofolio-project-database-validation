"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var eventSchema = new Schema({
  title     : { type: String,  unique: true, required: [true, 'Title required'], index: { unique: true }},
  eventName : { type: String, required: [true, 'Event name required']},
  // date      : { type: Date, required: [true, 'Date event required']},
  email     : { type    : String,
                validate: {
                  validator: function(x) {
                      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(x);
                  },
                  message: 'Invalid email address'  }
              }
},
{
  timestamps : true
})

var Events = mongoose.model('Events', eventSchema)

module.exports = Events;
