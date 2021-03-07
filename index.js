//Express server

// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require("./models/server");

// Paquete para leer y establecer las variables de entorno
require("dotenv").config();

// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();

/*const express = require("express");
const app = express();
const server = require("http").createServer(app);

//socket server
const io = require("socket.io")(server);

//Desplegar directorio público
app.use(express.static(__dirname + "/public"));
io.on("connection", (socket) => {
  console.log("Connected client (device)!!!" + socket.id);


  //Message from client
  socket.on("message-client", (data) => {
    console.log(data);
    io.emit("message-to-one-client", data);

    //si se pone socket es one to one, si se pone io se manda a todos
    //Message from server to ALL the clients
  });
});
server.listen(8080, () => {
  console.log("Server running port:8080");
});
*/
