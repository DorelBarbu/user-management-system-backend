import express from 'express';
import { acl } from '../../middleware/acl/acl';
import { requireAuth } from '../../middleware/RequireAuth';
import validateRequest from '../../middleware/ValidateRequestBody';
import { insertRoleController } from './RoleController';
import insertRoleRequestSchema from './validators/InsertRoleValidator';


const roleRouter = express.Router();

roleRouter.post('/',requireAuth, acl, validateRequest(insertRoleRequestSchema), insertRoleController);

export default roleRouter;