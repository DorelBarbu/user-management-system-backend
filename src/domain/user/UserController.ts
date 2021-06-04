import { Response, Request } from 'express';

export const registerUser = (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: 'register user successful'
  });
}

export default registerUser;