import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import EventController from '@controllers/event.controller';

class EventRoute implements Routes {
  public path = '/eventhandler';
  public router = Router();
  public eventController = new EventController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:event`, this.eventController.index);
    this.router.get(`${this.path}/login/:name/:studentId`, this.eventController.startGame);
  }
}

export default EventRoute;
