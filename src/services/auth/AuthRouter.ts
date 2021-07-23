import { Router } from "express";
import { requireAuth } from "../../middleware/RequireAuth";
import { verifyToken } from "./AuthController";

const auth = Router();

auth.post("/verify", requireAuth, verifyToken);

export default auth; 