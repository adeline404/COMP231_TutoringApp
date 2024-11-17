// screens/TutorHomepage.js
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//import tutors from '../data/tutors';
import { getTutors } from '../api/tutorApi';

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

=======
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import tutors from '../data/tutors';

export default function TutorHomepage() {
>>>>>>> 580b3c77495da8adbf1056e8d977f74892be9a30
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor Homepage</Text>
      <FlatList
        data={tutors}
<<<<<<< HEAD
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
=======
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
>>>>>>> 580b3c77495da8adbf1056e8d977f74892be9a30
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
<<<<<<< HEAD
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
=======
  item: { padding: 10, borderBottomWidth: 1 },
>>>>>>> 580b3c77495da8adbf1056e8d977f74892be9a30
});
