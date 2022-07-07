import express, { Application } from "express";
import cors from 'cors';

// Routes
import StartRoutes from "../routes/start.route";

class Server {

    private port : string;
    private app  : Application;

    constructor () {
        this.port = process.env.PORT || '';
        this.app = express();

        this.middlewares();
        this.routes();  
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes () {
        this.app.use('/', StartRoutes);
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Server listening in port ${ this.port } ✅`)
        })
    }
}

export default Server;