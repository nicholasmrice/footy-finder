const mongoose = require('mongoose')
const parkSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        image: {type: String, default: 'https://i.pinimg.com/originals/27/3f/71/273f71992c2660ba57a2823db7389a8f.jpg'},
        latitude: Number,
        longitude: Number,      
    }
)

const Park = mongoose.model('Park', parkSchema)
module.exports = Park
