import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';

const TutorScheduleManager = () => {
  const [schedule, setSchedule] = useState([]);
  const [newSession, setNewSession] = useState('');

  const addSession = () => {
    if (newSession.trim() === '') {
      Alert.alert('Error', 'Session name cannot be empty');
      return;
    }
    setSchedule([...schedule, { id: Date.now().toString(), name: newSession }]);
    setNewSession('');
  };

  const removeSession = (id) => {
    setSchedule(schedule.filter((session) => session.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Schedule</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter session name"
        value={newSession}
        onChangeText={setNewSession}
      />
      <Button title="Add Session" onPress={addSession} />

      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sessionItem}>
            <Text style={styles.sessionText}>{item.name}</Text>
            <Button
              title="Remove"
              color="red"
              onPress={() => removeSession(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  sessionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sessionText: {
    fontSize: 16,
  },
});

export default TutorScheduleManager;
