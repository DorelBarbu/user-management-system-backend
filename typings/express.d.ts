import { IRoleModel } from "../src/domain/role/RoleModel";
import User from "../src/domain/user/interfaces/User";

export {};

declare global {
  namespace Express {
    interface Request {
      userId: string;
      user: IUser;
      role: IRoleModel;
    }
  }
}
