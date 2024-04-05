module.exports = class ApiHelper {
  constructor(socketIO) {
    this.socketIO = socketIO;
  }

  countUsersWaiting() {
    return this.socketIO.sockets.adapter.rooms.get("waitingRoom").size;
  }

  getFirstUserWaiting() {
    return Array.from(this.socketIO.sockets.adapter.rooms.get("waitingRoom"))[0];
  }

  disconnectUsersFromWaitingRoom(users) {
    users.forEach((user) => {
      this.socketIO.sockets.sockets.get(user).leave("waitingRoom");
    });
  }

  joinUsersOnTheSameRoom(users) {
    const roomName = users.join("");
    users.forEach((user) => {
      this.socketIO.sockets.sockets.get(user).join(roomName);
    });
    return roomName;
  }
}