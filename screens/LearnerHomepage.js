// screens/LearnerHomepage.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import learners from '../data/learners';

export default function LearnerHomepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learner Homepage</Text>
      <FlatList
        data={learners}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Subject: {item.subject}</Text>
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
