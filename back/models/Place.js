const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
        name:{
        type: Schema.Types,
        ref: 'User',
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
            type: String, required: true
    },
    images: {
        type: Schema.Types.ObjectId,
        ref: 'Images'
    }
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
