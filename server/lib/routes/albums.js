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
    .get('/:id', (req, res, next) => {
        Album.findById(req.params.id)
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
    // TODO: change to allow addition to multiple albums
    .patch('/add-photos/:ids', (req, res, next) => {
        const albumIds = req.params.ids.split(',');
        Album.update(
            { _id: { $in: albumIds }}, 
            { $push: { photos: { $each: req.body.photoIds } } }, 
            { multi: albumIds.length > 1 }
        )
        .then(updated => res.send(updated))
        .catch(next);
    })
    // TODO: change to allow addition to multiple albums
    .patch('/rm-photos/:ids', (req, res, next) => {
        const albumIds = req.params.ids.split(',');        
        Album.update(
            { _id: { $in: albumIds }}, 
            { $pullAll: { photos: req.body.photoIds } }, 
            { multi: albumIds.length > 1 }
        )
            .then(updated => res.send(updated))
            .catch(err => console.log(err));
    })
    .delete('/:id', (req, res, next) => {
        Album.findByIdAndRemove(req.params.id)
        .then(removed => res.send({ removed: !!removed }))
        .catch(next);
    })
;