// screens/TutorHomepage.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import tutors from '../data/tutors';

export default function TutorHomepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor Homepage</Text>
      <FlatList
        data={tutors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
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
  item: { padding: 10, borderBottomWidth: 1 },
});
