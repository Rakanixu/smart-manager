import * as express from 'express';
import * as health from './api/health';
import * as user from './api/user-account';
import { config } from './config';

const RESOURCES = {
    HEALTH: '/health',
    USER: '/user'
};

export function setupRoutes(app: express.Express) {
    const router: express.Router = express.Router();

    router.use(RESOURCES.HEALTH, health.routes);
    router.use(RESOURCES.USER, user.routes);

    app.use(config.apiPathPrefix, router);
    app.use('/', (req, res) => {
        res.statusCode = 404;
        res.send('Unknown url');
    });

    // error handling
    const errorHandler: express.ErrorRequestHandler = (err, req, res, next) => {
        console.log(err, req.params, req.body);
        res.status(500).json({ error: err });
    };

    app.use(errorHandler);
}
