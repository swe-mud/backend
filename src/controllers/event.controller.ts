import { NextFunction, Request, Response } from 'express';
import { sendToWsClient } from '@/server';
import { game } from '@/classes/Game';

class EventController {
  public index = (request: Request, response: Response, next: NextFunction) => {
    try {
      const event = request.params.event;
      game.handleEvent(event);
      response.status(200).json({ disableInput: true, sent_event: event });
    } catch (error) {
      next(error);
    }
  };
}

export default EventController;
