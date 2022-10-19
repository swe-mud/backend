import { NextFunction, Request, Response } from 'express';
import { sendToWsClient } from '@/server';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ test123: 'tee' });
      sendToWsClient('hallo Welt, was geht bei euch?');
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
