import { io } from "socket.io-client";

let socket = null;

export function connectSocket(userId) {
  if (socket?.connected) return socket;
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
