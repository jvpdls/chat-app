const express = require("express");
const app = express();
const PORT = 4000;
const http = require("http").Server(app);
const cors = require("cors");
const socketHandlers = require("./handlers/socketHandlers");

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());

socketHandlers(socketIO);

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
