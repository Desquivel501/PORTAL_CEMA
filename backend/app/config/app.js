const express = require('express')
const cors = require("cors");
const fileUpload = require('express-fileupload');
const {
  responseFormatter, 
  routeNotFound
} = require('../middlewares/apiFormatResponse');
const { RutasUser } = require('../routes/users');
const db = require('./database/mysql');

class Server{
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3000;

    global.console_log = require("./helpers/console")._console_log;

    this.databaseConnection();

    // this.server = require("http").createServer(this.app);  
  }

  databaseConnection(){
    global.mysqlConnection = db;

    mysqlConnection.raw('SELECT 1')
      .then(() => console.log('Database connected successfully'))
      .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit the app if db connection fails
      });
  }

  middleware(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));    
    this.app.use(fileUpload());
    this.app.use(responseFormatter);
  }
  
  routes(){
    global.routes_users = require("express").Router();

    this.app.use("/api/user", authenticateToken,[routes_users]);

    RutasUser(route);
  }

  listen() {        
    this.server.on("uncaughtException", function (err) {
        console_log({ err });
    });

    this.server.listen(this.port, () => {
      console_log("Servidor corriendo en puerto", this.port);
    });
  } 

  middlewareErrores(){
    // Middleware  formato de respuesta depara rutas no encontradas
    this.app.use(routeNotFound);

    // Middleware para formato de respuesta de errores
    this.app.use(handleError);                
  }

}


module.exports = Server;