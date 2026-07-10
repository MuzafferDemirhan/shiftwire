import { io } from "socket.io-client";

let socket = null;

export function connectSocket(userId) {
  if (socket?.connected) return socket;
  if (socket) {
    socket.removeAllListeners();
    socket.disconnect();
  }
  socket = io("", {
    query: { userId },
    transports: ["websocket", "polling"],
  });
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

export function getSocket() {
  return socket;
}
