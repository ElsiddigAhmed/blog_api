import express from 'express';
import routers from './routes';
import middlewares, {logger} from './middlewares';
import path from 'path';

// exporting facotry function
export default function(app) {
  // using static resources directory
  app.use('/resources/images/', express.static(path.join(__dirname, './static')));
  // mapping logger to requests
  app.use(logger);
  // using api routes
  app.use(routers);
  // using middleware
  middlewares(app);
}
