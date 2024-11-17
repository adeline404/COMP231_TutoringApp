// screens/TutorHomepage.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//import tutors from '../data/tutors';
import { getTutors } from '../backend/api/tutorApi';

export default function TutorHomepage() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await getTutors();
        setTutors(response.data);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };
    fetchTutors();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor Homepage</Text>
      <FlatList
        data={tutors}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Expertise: {item.expertise}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
