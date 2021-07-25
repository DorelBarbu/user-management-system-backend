import express from 'express';
import { acl } from '../../middleware/acl/Acl';
import { requireAuth } from '../../middleware/RequireAuth';
import validateRequest from '../../middleware/ValidateRequestBody';
import * as RoleController from './RoleController';
import insertRoleRequestSchema from './validators/InsertRoleValidator';


const roleRouter = express.Router();

roleRouter.post('/',requireAuth, acl, validateRequest(insertRoleRequestSchema), RoleController.insertRoleController);
roleRouter.get("/", requireAuth, acl, RoleController.getAllRoles);

export default roleRouter;