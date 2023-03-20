import { Request, Response } from 'express';
import {salesforceapiDao} from '../dao/salesforceapiDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let salesforceapi = new salesforceapiDao();

export class salesforceapiService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpDelete')
     let  salesforceapiId = req.params.id;
     salesforceapi.GpDelete(salesforceapiId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpSearch')
     let  salesforceapiData = req.query;
     salesforceapi.GpSearch(salesforceapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpSearchForUpdate')
     let  salesforceapiData = req.body;
     salesforceapi.GpSearchForUpdate(salesforceapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpUpdate')
     let  salesforceapiData = req.body;
     salesforceapi.GpUpdate(salesforceapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpGetNounById')
     let  salesforceapiId = req.params.id;
     salesforceapi.GpGetNounById(salesforceapiId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpGetAllValues')
     
     salesforceapi.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpCreate')
     let  salesforceapiData = req.body;
     salesforceapi.GpCreate(salesforceapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpSearchRelationship')
     let  salesforceapiData = req.query;
     salesforceapi.GpSearchRelationship(salesforceapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into salesforceapiService.ts: GpGetNounCreatedBy')
     let  salesforceapiData = { created_by: req.query.createdby };
     salesforceapi.GpGetNounCreatedBy(salesforceapiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from salesforceapiService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}