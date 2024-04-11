const express = require("express");
const app = express();
const PORT = 4000;
const http = require("http").Server(app);
const cors = require("cors");
const socketHandlers = require("./handlers/socketHandlers");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

const socketIO = require("socket.io")(http, {
  cors: {
    origin: process.env.CHAT_BASE_URL,
  },
});

app.use(cors());

socketHandlers(socketIO);

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
