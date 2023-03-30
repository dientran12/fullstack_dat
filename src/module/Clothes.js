const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const clothesSchema = new Schema({
     name: {
        type: String,
        required: true
     },
     color: {
        type: String,
        required: true
     },
     description: {
        type: String,
        required: true
     },
     price: {
        type: Number,
        required: true
     },
     image: {
        type: String,
        required: true
     },
})

module.exports = mongoose.model('Clothes', clothesSchema)