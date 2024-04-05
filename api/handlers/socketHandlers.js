const ApiHelper = require("../helpers/ApiHelper");
const MessageHelper = require("../helpers/MessageHelper");

module.exports = function socketHandlers(socketIO) {
  socketIO.on("connection", (socket) => {
    socket.join("waitingRoom");
    const apiHelper = new ApiHelper(socketIO);
    const numberOfUsersWaiting = apiHelper.countUsersWaiting();

    if (numberOfUsersWaiting >= 2) {
      const usersWaiting = [apiHelper.getFirstUserWaiting(), socket.id];
      const roomName = apiHelper.joinUsersOnTheSameRoom(usersWaiting);
      apiHelper.disconnectUsersFromWaitingRoom(usersWaiting);
      socketIO.to(roomName).emit("paired");
    } else {
      socket.emit("waiting");
    }

    socket.on("typingResponse", () => {
      socket.rooms.forEach(function (room) {
        socket.broadcast.to(room).emit("typingResponse");
      });
    });

    socket.on("notTypingResponse", () => {
      socket.rooms.forEach(function (room) {
        socket.broadcast.to(room).emit("notTypingResponse");
      });
    });

    socket.on("newMessage", (message) => {
      const sanitizedMessage = MessageHelper.sanitizeMessage(message.content);
      message.content = sanitizedMessage;

      socket.emit("newMessage", message);

      socket.rooms.forEach(function (room) {
        socket.to(room).emit("newMessage", message);
      });
    });

    socket.on("disconnecting", () => {
      socket.rooms.forEach(function (room) {
        socket.broadcast.to(room).emit("partnerDisconnected");
      });
    });
  });
};
