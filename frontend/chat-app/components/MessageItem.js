import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageItem({ message }) {
  const time = new Date(message.timestamp).toLocaleTimeString();
  return (
    <View style={styles.msg}>
      <Text style={styles.user}>{message.user}</Text>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  msg: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f1f1f1",
    borderRadius: 5
  },
  user: { fontWeight: "bold" },
  time: { fontSize: 10, color: "#666", marginTop: 5 }
});
