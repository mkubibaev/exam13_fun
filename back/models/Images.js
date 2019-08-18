const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    places: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true
    },
    image: {
        type: String
    }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
