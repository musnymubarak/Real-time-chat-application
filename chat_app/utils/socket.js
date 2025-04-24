import { io } from "socket.io-client";

// Set up the socket connection URL
const socket = io("http://172.26.64.1:4000"); // Replace with your backend IP and port

let socketConnection;

export const useSocket = () => {
  const [messages, setMessages] = useState([]);

  // Handle socket connection
  const socketConnection = () => {
    socket.on("connect", () => {
      console.log('Connected to the server');
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  };

  // Handle sending messages
  const sendMessage = (text) => {
    socket.emit("send_message", { text, timestamp: new Date().toISOString() });
  };

  return { socketConnection, messages, sendMessage };
};

export default socket;
