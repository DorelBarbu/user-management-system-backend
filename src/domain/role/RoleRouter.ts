import express from 'express';
import { requireAuth } from '../../middleware/RequireAuth';
import validateRequest from '../../middleware/ValidateRequestBody';
import { insertRoleController } from './RoleController';
import insertRoleRequestSchema from './validators/InsertRoleValidator';


const roleRouter = express.Router();

roleRouter.post('/', validateRequest(insertRoleRequestSchema), insertRoleController);

export default roleRouter;