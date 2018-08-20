import * as mongoose from 'mongoose';
import { Role } from '../enums/role';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
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
        type: Role,
        default: Role.affiliate
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
    password: {//TODO: Hide passwords or hash in query from db
        type: String,
        required: 'Enter a password'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});