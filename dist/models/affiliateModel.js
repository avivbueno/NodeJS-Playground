"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AffiliateSchema = new Schema({
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
        required: 'Enter a agency/company name'
    },
    phone: {
        type: String,
        required: 'Enter a phone number'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=affiliateModel.js.map