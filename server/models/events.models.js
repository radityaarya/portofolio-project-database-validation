"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;

var eventSchema = new Schema({
  title     : { type: String, required: true}
  eventName : { type: String, required: true},
  date      : { type: Date, required: true},
  email     : { type: String, required: true}
},
{
  timestamps : true
})

var Events = mongoose.model('Events', usersSchema)

module.exports = Events;
