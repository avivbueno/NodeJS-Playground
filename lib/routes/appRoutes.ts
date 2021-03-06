import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/crmController";
import { UserController } from "../controllers/userController";

export class Routes {
    
    public contactController: ContactController = new ContactController()
    public userController: UserController = new UserController()
    private key:string = "78942ef2c1c98bf10fca09c808d718fa3734703e";
    public routes(app): void {
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                });
            })

        // Contact 
        app.route('/contact')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                if (req.query.key !== this.key) {
                    res.status(401).send('You shall not pass!');
                } else {
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
            .delete(this.contactController.deleteContact)

        // Contact 
        app.route('/user')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                if (req.query.key !== this.key) {
                    res.status(401).send('You shall not pass!');
                } else {
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
            .delete(this.userController.deleteUser)

    }
}