"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const role_1 = require("../enums/role");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String,
        default: "MarketPro Client"
    },
    role: {
        type: role_1.Role,
        default: role_1.Role.affiliate
    },
    active: {
        type: Boolean,
        default: false
    },
    agreement: {
        type: String,
        default: "#"
    },
    phone: {
        type: String,
        required: 'Enter a phone number'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=userModel.js.map