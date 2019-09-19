import * as express from 'express';
import router from './routes';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as history from 'connect-history-api-fallback';

class App {
    public app:express.Application;
    public staticsPath:express.Handler = express.static(path.join(process.cwd(), 'build/client'));

    constructor() {
        this.app = express()
        // this.app.use(bodyParser.json())
        // this.app.use(bodyParser.urlencoded({ extended: false }))
        // this.mountConfig()
        // this.routes.mountRoutes(express.Router());
        // this.app.use(function(req,res,next){
        //     console.log('from server', req);
        //     next()
        // })
        // this.app.use(router)
        
        this.app.use(router);
        this.app.use(history());
        this.app.use(this.staticsPath);
    }

    private mountConfig():void {
        this.app.use(express.static(path.join(process.cwd(), 'build/client')))
    }
}

export default new App().app
