import { NextFunction, Request, Response } from 'express';
import { sendToWsClient } from '@/server';

class EventController {
  public index = (request: Request, response: Response, next: NextFunction) => {
    try {
      const event = request.params.event;

      const data = { sent_event: event, type: 'message', messages: [1234, 33, 2, 23, 4, 2134] };
      sendToWsClient(data);

      response.status(200).json({ disableInput: true, sent_event: event });
    } catch (error) {
      next(error);
    }
  };
}

export default EventController;
