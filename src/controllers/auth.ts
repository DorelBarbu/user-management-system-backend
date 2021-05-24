import express from 'express';

export const verifyTokenController = async (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: 'it works'
  });
}