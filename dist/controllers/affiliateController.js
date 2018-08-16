"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const affiliateModel_1 = require("../models/affiliateModel");
const Affiliate = mongoose.model('Affiliate', affiliateModel_1.AffiliateSchema);
class AffiliateController {
    addNewAffiliate(req, res) {
        let newAffiliate = new Affiliate(req.body);
        console.log(req.body);
        newAffiliate.save((err, affiliate) => {
            if (err) {
                res.send(err);
            }
            res.json(affiliate);
        });
    }
    getAffiliates(req, res) {
        Affiliate.find({}, (err, affiliate) => {
            if (err) {
                res.send(err);
            }
            res.json(affiliate);
        });
    }
    getAffiliateWithID(req, res) {
        Affiliate.findById(req.params.affiliateId, (err, affiliate) => {
            if (err) {
                res.send(err);
            }
            res.json(affiliate);
        });
    }
    updateAffiliate(req, res) {
        Affiliate.findOneAndUpdate({ _id: req.params.affiliateId }, req.body, { new: true }, (err, affiliate) => {
            if (err) {
                res.send(err);
            }
            res.json(affiliate);
        });
    }
    deleteAffiliate(req, res) {
        Affiliate.remove({ _id: req.params.affiliateId }, (err, affiliate) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted affiliate!' });
        });
    }
}
exports.AffiliateController = AffiliateController;
//# sourceMappingURL=affiliateController.js.map