import { Router, Request, Response } from "express";
import { OK_CODE } from "../../errorHandling/ResponseCodes";
import { acl } from "../../middleware/acl/Acl";
import { requireAuth } from "../../middleware/RequireAuth";

const companyRouter = Router();

companyRouter.get("/", requireAuth, acl, (req: Request, res: Response) => {
  res.status(OK_CODE).json("OK");
});

companyRouter.post("/", requireAuth, acl, (req: Request, res: Response) => {
  res.status(OK_CODE).json("OK");
});


export default companyRouter;