import * as mongoose from 'mongoose';
import { AffiliateSchema } from '../models/affiliateModel';
import { Request, Response } from 'express';

const Affiliate = mongoose.model('Affiliate', AffiliateSchema);

export class AffiliateController{

    public addNewAffiliate (req: Request, res: Response) {                
        let newAffiliate = new Affiliate(req.body);
        console.log(req.body);
        newAffiliate.save((err, affiliate) => {
            if(err){
                res.send(err);
            }    
            res.json(affiliate);
        });
    }

    public getAffiliates (req: Request, res: Response) {           
        Affiliate.find({}, (err, affiliate) => {
            if(err){
                res.send(err);
            }
            res.json(affiliate);
        });
    }

    public getAffiliateWithID (req: Request, res: Response) {          
        Affiliate.findById(req.params.affiliateId, (err, affiliate) => {
            if(err){
                res.send(err);
            }
            res.json(affiliate);
        });
    }

    public updateAffiliate (req: Request, res: Response) {           
        Affiliate.findOneAndUpdate({ _id: req.params.affiliateId }, req.body, { new: true }, (err, affiliate) => {
            if(err){
                res.send(err);
            }
            res.json(affiliate);
        });
    }

    public deleteAffiliate (req: Request, res: Response) {           
        Affiliate.remove({ _id: req.params.affiliateId }, (err, affiliate) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted affiliate!'});
        });
    }
    
}