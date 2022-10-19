import { NextFunction, Request, Response } from 'express';

class EventController {
  public index = (request: Request, response: Response, next: NextFunction) => {
    try {
      const event = request.params.event;

      // handleevent and pass string

      response.status(200).json({ disableInput: true, sent_event: event });
    } catch (error) {
      next(error);
    }
  };
}

export default EventController;
