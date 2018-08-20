"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const User = mongoose.model('User', userModel_1.UserSchema);
class UserController {
    addNewUser(req, res) {
        let newUser = new User(req.body);
        console.log(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUsers(req, res) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUserWithID(req, res) {
        User.findById(req.params.affiliateId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.affiliateId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    deleteUser(req, res) {
        User.remove({ _id: req.params.affiliateId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map