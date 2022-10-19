import { NextFunction, Request, Response } from 'express';
import { sendToWsClient } from '@/server';
import { game } from '@/classes/Game';

class EventController {
  public index = (request: Request, response: Response, next: NextFunction) => {
    try {
      const event = request.params.event;
      game.handleEvent(event);
      response.status(200);
    } catch (error) {
      next(error);
    }
  };

  public startGame = (request: Request, response: Response, next: NextFunction) => {
    try {
      const name = request.params.name;
      const studentId = request.params.studentId;

      game.start(name, Number(studentId));

      response.status(200).json({ name, studentId });
    } catch (error) {
      next(error);
    }
  };
}

export default EventController;
