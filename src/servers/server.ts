import express, { Application } from "express";
import cors from 'cors';

class Server {

    private port : string;
    private app  : Application;

    constructor () {
        this.port = process.env.PORT || '';
        this.app = express();
        this.middlewares();
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Server listening in port ${ this.port } ✅`)
        })
    }
}

export default Server;