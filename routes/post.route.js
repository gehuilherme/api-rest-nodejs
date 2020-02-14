const express = require('express');

const postExpressRoute = express.Router();


let PostSchema = require('../model/post.model');

postExpressRoute.route('/all-posts').get((req, res) => {
    PostSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

postExpressRoute.route('/create-post').post((req, res, next) => {
    PostSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

postExpressRoute.route('/get-post/:id').get((req, res) => {
    PostSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

postExpressRoute.route('/update-post/:id').put((req, res, next) => {
    PostSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Post successfully updated!')
        }
    })
})

postExpressRoute.route('/remove-post/:id').delete((req, res, next) => {
    PostSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = postExpressRoute;