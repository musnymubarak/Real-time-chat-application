
# React Native Chat Application

This is a simple chat application built using **React Native** for the frontend and **Node.js** with **Socket.io** for real-time communication. The app allows users to enter their name, join a chat room, and exchange messages in real-time.

## Features

- **User Authentication (Dummy Login)**: Users can enter their name to log in.
- **Real-Time Chat**: Users can send and receive messages in real-time using **Socket.io**.
- **Message Timestamps**: Each message displays a timestamp when it is sent.

## Prerequisites

- **Node.js** (with npm or yarn) installed on your machine.
- **React Native** development environment set up. Follow the [official React Native setup guide](https://reactnative.dev/docs/environment-setup).
- **Expo CLI** installed (for running the app on mobile).
- **Socket.io** installed for backend communication.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/react-native-chat-app.git
cd react-native-chat-app
```

### 2. Install dependencies

In the root of the project directory, install both frontend and backend dependencies.

#### For the backend:

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

#### For the frontend:

Navigate to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

### 3. Start the backend server

In the backend directory, start the server using:

```bash
npm start
```

This will start the server on `http://localhost:4000`.

### 4. Run the React Native app

In the frontend directory, run the app on your emulator or mobile device:

```bash
npm start
```

Alternatively, if you're using Expo:

```bash
expo start
```

This will open the Expo Developer Tools in your browser. You can then scan the QR code with the Expo Go app to run the app on your mobile device.

### 5. Access the app

- **Login Screen**: Enter your username and press "Enter Chat" to start chatting.
- **Chat Screen**: You’ll see a chat interface where you can send and receive messages in real-time.

## File Structure

```
/react-native-chat-app
├── /backend             # Server-side (Node.js, Socket.io)
│   ├── server.js        # Express server setup
│   ├── /routes          # API and socket routes
│   └── /controllers     # Socket event handlers
├── /frontend            # Frontend (React Native)
│   ├── App.js           # Main application file
│   ├── /screens         # Screen components
│   └── /components      # Reusable components (e.g., chat message)
└── /package.json        # Project dependencies
```

## Dependencies

### Backend
- **express**: Web server framework for Node.js.
- **socket.io**: Real-time bidirectional event-based communication.

### Frontend
- **react-native**: Framework for building native apps using React.
- **socket.io-client**: Client-side library for interacting with the Socket.io server.

## Troubleshooting

- If you see the error `ERR_CONNECTION_REFUSED`, ensure the backend server is running at the correct address and port.
- If the application doesn't display properly, try clearing the cache:
  
  ```bash
  npx react-native start --reset-cache
  ```

- If you're running the app on a mobile device, ensure that your device and the backend server are on the same network. You may need to replace `localhost` with your machine's local IP address.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# Real-time-chat-application
