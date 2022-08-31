# MUD Backend
This is the backend of the mud game. It contains the api for the frontend and the application logic to control the game. We use the boilerplate construct from express and typescript.

# Installation & start
To run the code, please install the newest `node js`, `sqlite` and `typescript transpiler`.

  ## Run the code
  1. clone the repository
  2. navigate to the directory and run `npm install`
  3. run `npm run dev`
  Have fun.

# Project structure
- src/ (All code for the backend/api)
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
