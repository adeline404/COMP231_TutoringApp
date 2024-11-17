// screens/LearnerHomepage.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//import learners from '../data/learners';
import { getLearners } from '../backend/api/learnerApi';

export default function LearnerHomepage() {
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    const fetchLearners = async () => {
      try {
        const response = await getLearners();
        setLearners(response.data);
      } catch (error) {
        console.error('Error fetching learners:', error);
      }
    };
    fetchLearners();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learner Homepage</Text>
      <FlatList
        data={learners}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
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
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
