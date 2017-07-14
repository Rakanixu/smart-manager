import * as express from 'express';
import * as ProjectController from './project.controller';
import { ICustomRequest } from '../../utils/custom.types';
import { resolve } from '../../utils/resolveRequest';

export const routes = express.Router();

routes.get('/', getProjects);
routes.post('/', createProject);
routes.get('/:projectId', getProject);
routes.delete('/:projectId', deleteProject);

function getProjects(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, ProjectController.getProjects());
}

function createProject(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, ProjectController.createProject(req.body));
}

function getProject(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, ProjectController.getProject(req.params.projectId));
}

function deleteProject(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, ProjectController.deleteProject(req.params.projectId));
}
