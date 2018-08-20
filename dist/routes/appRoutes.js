"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const userController_1 = require("../controllers/userController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.userController = new userController_1.UserController();
        this.key = "78942ef2c1c98bf10fca09c808d718fa3734703e";
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
            if (req.query.key !== this.key) {
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
        app.route('/user')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== this.key) {
                res.status(401).send('You shall not pass!');
            }
            else {
                next();
            }
        }, this.userController.getUsers)
            // POST endpoint
            .post(this.userController.addNewUser);
        // Contact detail
        app.route('/user/:userId')
            // get specific contact
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appRoutes.js.map