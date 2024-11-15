// screens/TutorRegister.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addTutor } from '../data/userData';

export default function TutorRegister({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [expertise, setExpertise] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password || !expertise) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    await addTutor({ name, email, password, expertise });
    Alert.alert('Success', 'Tutor registered successfully');
    navigation.navigate('Login'); // Redirect back to login after registration
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor Registration</Text>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Expertise" value={expertise} onChangeText={setExpertise} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
});
