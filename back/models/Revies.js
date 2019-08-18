const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: true
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    quality: Number,
    service: Number,
    interior: Number

});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
