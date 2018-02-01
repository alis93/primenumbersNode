### A node server that allows the user to provide a number and returns the nearest prime number.

## Built using:
* Nodejs v8.7.0
* NPM 5.5.1
* Mac OS 10.13.2

## How to run/develop/test

* Download the project to your local computer.
* Run `npm install`

### Build and Run

In order to run this in production mode

* Run `npm run build`
* Run `npm start` or `npm run production`

If the build fails you may need to install typescript globally using `npm install -g typescript`

### Develop

In order to run this in development mode

* Run `npm install -g concurrently typescript nodemon`
* Run `npm run development`

This will run the development script, which watches the files for changes and restarts the server when they are detected.


### Test

In order to run the tests using jest.

* Run `npm run test`
