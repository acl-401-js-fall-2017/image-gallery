const router = require('express').Router();
const Album = require('../models/Album');

module.exports = router
    .get('/', (req, res, next) => {
        Album.find({})
            .lean()
            .populate('photos')
            .then(got => res.send(got))
            .catch(next);
    })
    .post('/', (req, res, next) => {
        console.log(req.body);
        new Album(req.body)
            .save()
            .then(saved => res.send(saved))
            .catch(next);
    })
    .patch('/add-photos/:id', (req, res, next) => {
        Album.findByIdAndUpdate(
            req.params.id, 
            { $push: { photos: { $each: req.body.photoIds } } }, 
            { new: true }
        )
            .then(updated => res.send(updated))
            .catch(next);
    })
    .patch('/rm-photos/:id', (req, res, next) => {
        Album.findByIdAndUpdate(
            req.params.id, 
            { $pullAll: { photos: req.body.photoIds } }, 
            { new: true }
        )
            .then(updated => res.send(updated))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Album.findByIdAndRemove(req.params.id)
        .then(removed => res.send({ removed: !!removed }))
        .catch(next);
    })
;