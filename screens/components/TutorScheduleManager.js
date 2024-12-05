//screens/components/TutorScheduleManager.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const TutorScheduleManager = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [schedule, setSchedule] = useState({});
  const [newSession, setNewSession] = useState('');

  const addSession = () => {
    if (!selectedDate) {
      Alert.alert('Error', 'Please select a date on the calendar.');
      return;
    }
    if (newSession.trim() === '') {
      Alert.alert('Error', 'Session name cannot be empty.');
      return;
    }

    setSchedule((prev) => {
      const updatedSchedule = { ...prev };
      if (!updatedSchedule[selectedDate]) {
        updatedSchedule[selectedDate] = [];
      }
      updatedSchedule[selectedDate].push({ id: Date.now().toString(), name: newSession });
      return updatedSchedule;
    });

    setNewSession('');
    Alert.alert('Success', 'New session added!');
  };

  const removeSession = (date, sessionId) => {
    setSchedule((prev) => {
      const updatedSchedule = { ...prev };
      updatedSchedule[date] = updatedSchedule[date].filter((session) => session.id !== sessionId);
      if (updatedSchedule[date].length === 0) delete updatedSchedule[date];
      return updatedSchedule;
    });
    Alert.alert('Success', 'Session removed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Tutoring Schedule</Text>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...Object.keys(schedule).reduce((acc, date) => {
            acc[date] = { marked: true };
            return acc;
          }, {}),
          ...(selectedDate ? { [selectedDate]: { selected: true, marked: true } } : {}),
        }}
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          todayTextColor: '#00adf5',
        }}
      />

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter session name"
        value={newSession}
        onChangeText={setNewSession}
      />
      <Button title="Add Session" onPress={addSession} />

      {/* Sessions List */}
      {selectedDate && (
        <View style={styles.sessionListContainer}>
          <Text style={styles.sessionListHeader}>Sessions on {selectedDate}:</Text>
          <FlatList
            data={schedule[selectedDate] || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.sessionItem}>
                <Text style={styles.sessionText}>{item.name}</Text>
                <Button
                  title="Remove"
                  color="red"
                  onPress={() => removeSession(selectedDate, item.id)}
                />
              </View>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No sessions scheduled for this day.</Text>
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  sessionListContainer: { marginTop: 20 },
  sessionListHeader: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  sessionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sessionText: { fontSize: 16 },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default TutorScheduleManager;
