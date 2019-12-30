// /lib/routes/crmRoutes.ts
import {Application, Request, Response, Router} from "express";
import * as express from "express";
import * as path from "path";

class Routes {  
    public router:Router = express.Router();

    constructor() {
        this.mountRoutes(this.router);
    }

    public mountRoutes(router:Router):void {
        console.log('code is here', router);

        // router.get(
        //     ['/about', '/contacts'],

        // )

        router.route('/')
            .get((req:Request, res:Response) => {
                console.log('is hherer');
                res.status(200).redirect('/hero');
            })
        
        // router.use(['/main', '/about', '/contacts'], express.static(path.join(process.cwd(), 'dist/client')))
            // .get((req:Request, res:Response) => {
            //     // res.status(200).sendfile(path.join(process.cwd(), 'dist/client/index.html'))
            //     // console.log('yes');
                
                
            // })
            // .get((req:Request, res:Response) => {
            //     return 
            // })
        // router.route('*')
        //     .get((req:Request, res:Response) => {
        //         console.log('gere');
                
        //         res.status(404).send('NO!');
        //     })

        // app.route('/')
        //     .get((req:Request, res:Response) => {        
        //         // res.status(200).sendFile(path.join(process.cwd(), 'dist/client/index.html'))
        //         res.status(200).redirect('/main');
        //     })
        // app.route('*')
        //     .get((req:Request, res:Response) => {
        //         console.log('from *');
        //         res.status(404).send('HEck')
        //     })

        // POST endpoint
        // app.route('*')
        //     .get((req:Request, res:Response) => {        
        //         // res.status(200).sendFile(path.join(process.cwd(), 'dist/client/index.html'))
        //         console.log('from *');
        //         // res.status(200).redirect('/')
        //     })
    }
}

export default new Routes().router