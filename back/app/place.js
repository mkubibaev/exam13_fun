const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Place = require('../models/Place');

const config = require('../config');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const AllPlace = await Place.find();
    res.send(AllPlace)
});

router.get('/:id', async (req, res) => {
     Place.findById(req.params.id).populate('user')
         .then(result => {
             if (result) {
                 res.send(result)
             } else return res.sendStatus(404)
         }).catch(() => res.sendStatus(500))
});



router.post('/', [upload.single('image'), auth], (req, res) => {
    const placeData = req.body;
    console.log(placeData);

    if (placeData.agree) {
        placeData.image = req.file.filename;

        const place = new Place({
            user: req.user._id,
            name: placeData.name,
            description: placeData.description,
            image: placeData.image,
        });

        place.save()
            .then(result => res.send(result))
            .catch(error => res.status(400).send(error));
    }
});

module.exports = router;
