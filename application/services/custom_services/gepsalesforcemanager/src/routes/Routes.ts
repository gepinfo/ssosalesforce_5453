import { Request, Response, NextFunction } from "express";
import { SaleforceController } from '../controller/testsaleforcepathapiController';


export class Routes {
    private saleforceController: SaleforceController = new SaleforceController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/saleforcepathapi/get/search').get(this.saleforceController.GpSearch);
        app.route('/saleforcepathapi/userid/created_by').get(this.saleforceController.GpGetNounCreatedBy);
        app.route('/saleforcepathapi/:id').delete(this.saleforceController.GpDelete);
        app.route('/saleforcepathapi/get/update').put(this.saleforceController.GpSearchForUpdate);
        app.route('/saleforcepathapi').put(this.saleforceController.GpUpdate);
        app.route('/saleforcepathapi/:id').get(this.saleforceController.GpGetNounById);
        app.route('/saleforcepathapi').get(this.saleforceController.GpGetAllValues);
        app.route('/saleforcepathapi').post(this.saleforceController.GpCreate);

        app.route('/saleforcepathapi/login').post(this.saleforceController.salesforcelogin);
     }

}