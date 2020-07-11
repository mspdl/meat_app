# Meat App

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `nodemon --watch backend --exec "ts-node" backend/server.ts` to start the mock server. Navigate to `http://localhost:3001/`. The app will automatically reload if you change any of the source files.

To build the project: `ng build --prod --bh=/subdirectory/ --extract-css=false`

It's necessary to config your web server. More information:
https://angular.io/guide/deployment

## Why?

This project was created to practice what I was learning in the Udemy Course on Angular.

## Ok, but what does it do? 

It's a delivery food app. 
Basically, the user will be presented with a list of restaurants that he / she can choose from and then add products from those restaurants to the shopping cart. After informing he/she address and confirm the order, the system will register that order.

## So, what did I learn?
- Routes
- Dependency injection
- Service classes
- Reactive Programming and Http service
- Mock a back-end API (json-server)
- Error handling
- Parameterize routes
- Children Routes
- Pipes (async, date and currency)
- Template Forms
- Content Projection
- Reactive Forms
- Modules
- Animations
- Building