import { Router } from 'express';
import { acl } from '../../middleware/acl/Acl';
import { requireAuth } from '../../middleware/RequireAuth';
import { getAllPermissionsController } from './PermissionController';

const permissionRouter = Router();

permissionRouter.get('/', requireAuth, acl, getAllPermissionsController);

export default permissionRouter;