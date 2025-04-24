// components/ChatScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { io } from 'socket.io-client';

const socket = io('http://172.26.64.1:4000'); // Replace with your IP on LAN

export default function ChatScreen({ username }) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    const msgData = {
      message,
      username,
      timestamp: new Date().toLocaleTimeString(),
    };
    socket.emit('send_message', msgData);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatBox}>
        {chat.map((msg, idx) => (
          <View key={idx} style={styles.msg}>
            <Text style={styles.name}>{msg.username}:</Text>
            <Text>{msg.message}</Text>
            <Text style={styles.time}>{msg.timestamp}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 50 },
  chatBox: { flex: 1, marginBottom: 10 },
  msg: { marginVertical: 5, padding: 5, backgroundColor: '#e6e6e6', borderRadius: 5 },
  name: { fontWeight: 'bold' },
  time: { fontSize: 10, textAlign: 'right', color: '#555' },
  input: { borderBottomWidth: 1, marginBottom: 10 },
});
