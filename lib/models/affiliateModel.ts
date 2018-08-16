import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AffiliateSchema = new Schema({
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