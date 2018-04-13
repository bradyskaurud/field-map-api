const mongoose = require('mongoose');
const Schema   = mongoose.Schema,
      model    = mongoose.model.bind(mongoose),
      ObjectId = mongoose.Schema.Types.ObjectId;

const fieldSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  lat: String,
  lng: String,
  description: String,
});

const Field = model('Field', fieldSchema);

module.exports = { Field };

