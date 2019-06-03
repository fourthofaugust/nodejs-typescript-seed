import * as express from 'express';
import SampleService from "../services/sample.service";

export default class SampleRoute {
    private readonly PATH = '/samples';
    private readonly sampleService = new SampleService();
    public readonly router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.PATH, this.get);
    }

    get = (request: express.Request, response: express.Response) => {
        response.send(this.sampleService.findAllSamples());
    };

}