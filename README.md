# Stock App

## This app graphs the stock price of a company over a period of time.

### This app uses the following APIs:

- [polygon.io](https://polygon.io/)
- [openai.com](https://openai.com/)

### To run this app locally, change the package.json file that is in the root (backend) to:

````
"name": "stock_api",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "nodemon server.js",
    "client": "cd frontend && npm start"
  },

````
### When deploying to Heroku, change the package.json file that is in the root (backend) to:

````
"name": "stock_api",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },

  ````