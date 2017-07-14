import * as express from 'express';
import * as UserAccountController from './user-account.controller';
import { ICustomRequest } from '../../utils/custom.types';
import { resolve } from '../../utils/resolveRequest';

export const routes = express.Router();

routes.get('/', getUsers);
routes.post('/', createUser);
routes.get('/:userEmail', getUser);
routes.delete('/:userEmail', deleteUser);

function getUsers(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, UserAccountController.getUsers());
}

function createUser(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, UserAccountController.createUser(req.body));
}

function getUser(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, UserAccountController.getUser(req.params.userEmail));
}

function deleteUser(req: ICustomRequest, res: express.Response, next: express.NextFunction) {
  resolve(req, res, UserAccountController.deleteUser(req.params.userEmail));
}
