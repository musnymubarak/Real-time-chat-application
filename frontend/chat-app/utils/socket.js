import { io } from "socket.io-client";

const socket = io("http://172.16.20.24:4000");
export default socket;