const express = require('express');

const userExpressRoute = express.Router();


let UserSchema = require('../model/user.model');

/*
    Implementar criptografia de senhas antes de mandar os dados para o banco.
*/
userExpressRoute.route('/all-users').get((req, res) => {
    UserSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


userExpressRoute.route('/create-user').post((req, res, next) => {
    UserSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


userExpressRoute.route('/get-user/:id').get((req, res) => {
    UserSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


userExpressRoute.route('/update-user/:id').put((req, res, next) => {
    UserSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})


userExpressRoute.route('/remove-user/:id').delete((req, res, next) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = userExpressRoute;