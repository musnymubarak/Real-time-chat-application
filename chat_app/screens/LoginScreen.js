import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      navigation.navigate("Chat", { username });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Enter Chat" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, width: "80%", marginBottom: 10 }
});
