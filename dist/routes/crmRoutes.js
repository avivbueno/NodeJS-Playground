"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const affiliateController_1 = require("../controllers/affiliateController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.affiliateController = new affiliateController_1.AffiliateController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/contact')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }, this.contactController.getContacts)
            // POST endpoint
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
        // Contact 
        app.route('/affiliate')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }, this.affiliateController.getAffiliates)
            // POST endpoint
            .post(this.affiliateController.addNewAffiliate);
        // Contact detail
        app.route('/affiliate/:contactId')
            // get specific contact
            .get(this.affiliateController.getAffiliateWithID)
            .put(this.affiliateController.updateAffiliate)
            .delete(this.affiliateController.deleteAffiliate);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map