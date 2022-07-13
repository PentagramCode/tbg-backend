import express, { Application } from 'express';
import cors from 'cors';

// Routes
import StartRoutes from '../routes/start.route';
import AuthRoutes from '../routes/auth.route';
import CollectionRoutes from '../routes/collection.route';

// Config
import dbConnection from '../config/dbConnection';

// Interfaces
import IPaths from '../interfaces/paths';

class Server {

    private port  : string;
    private app   : Application;
    private paths : IPaths;

    constructor () {
        this.port = process.env.PORT || '';
        this.app = express();
        this.paths = {
            auth: '/api/auth',
            collection: '/api/collection'
        };

        this.runDatabase();
        this.middlewares();
        this.routes();  
    }

    async runDatabase () {
        await dbConnection();
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes () {
        this.app.use('/', StartRoutes);
        this.app.use(this.paths.auth, AuthRoutes);
        this.app.use(this.paths.collection, CollectionRoutes);
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`Server listening in port ${ this.port } ✅`);
        });
    }
}

export default Server;