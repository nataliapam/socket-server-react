class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("Connected client (device)!!!" + socket.id);

      //Message from client
      //on Connection
      socket.on("message-client", (data) => {
        console.log(data);
        this.io.emit("message-to-one-client", data);

        //si se pone socket es one to one, si se pone io se manda a todos
        //Message from server to ALL the clients
      });
    });
  }
}

module.exports = Sockets;
