import express, { response } from 'express';
const routes = express.Router();
import ClassesController from './controllers/ClassesController';
const classesController = new ClassesController();
import ConnectionsController from './controllers/ConnectionsController';
const connections = new ConnectionsController();




routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);
 
routes.post("/connections",connections.create)
routes.get("/connections",connections.index)


 export default routes;