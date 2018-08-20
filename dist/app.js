"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const appRoutes_1 = require("./routes/appRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new appRoutes_1.Routes();
        // public mongoUrl: string = 'mongodb://localhost/CRMdb';  
        this.mongoUrl = 'mongodb://testuser:testpass1@ds219051.mlab.com:19051/mpro';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map