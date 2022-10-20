# MUD Backend
This is the backend of the mud game. It contains the api for the frontend and the application logic to control the game. We use the boilerplate construct from express and typescript.

# Installation & start
To run the code, please install the newest `node js`.

  ## Run the code
  1. clone the repository
  2. navigate to the directory `src/` and also to the directory `frontend/` and run `npm install`
  3. add a file with the name `.env.development.local` to the root directory of this project folder (if its not already there); the file should contain the following content:
   
    # PORT
    PORT = 15517

    # DATABASE
    DB_HOST = localhost
    DB_PORT = 27017
    DB_DATABASE = dev

    # TOKEN
    SECRET_KEY = secretKey

    # LOG
    LOG_FORMAT = dev
    LOG_DIR = ../logs

    # CORS
    ORIGIN = *
    CREDENTIALS = true
  4. run `npm run dev` in the `src/` directory to start the backend and run it in the directory `frontend/` too. There you start the frontend. If the frontend is started, you can reach it: http://localhost:8080
  Have fun.

# Project structure
- frontend/ (All code for frontend)
- src/ (All code for the backend/api/game engine)
  - app/ (Place for the game application (logic etc.))
  - config/ (Configdirectory to load values from .env files)
  - controllers/ (HTTP-Controllers for the api)
  - databases/ (Place for the database and database dependency injection container)
  - dtos/ (Datatransfer Objects for validating the userinput via frontend)
  - entities/ (Database entities)
  - exceptions/ (Exceptions on API-Level)
  - http/ (Place to test http requests (not functional yet))
  - interfaces/ (Place for interfaces)
  - logs/ (only for dev environment)
  - middlewares/ (Task before and after the HTTP-Request reaches the controller)
  - routes/ (Definition of routes, that redirects to controllers)
  - services/ (Place for specific database tasks with entities)
  - tests/
  - utils/ (Helperfunctions etc.)
