import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LearnerProfileManager from './components/LearnerProfileManager';
import TutorBrowser from './components/TutorBrowser';
import UpcomingSessions from './components/UpcomingSessions';

export default function LearnerHomepage({ route }) {
  const { learner } = route.params; // Access the passed learner object

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learner Homepage</Text>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Profile Section */}
        <View style={styles.section}>
          <LearnerProfileManager learner={learner} />
        </View>
        {/* Tutor Browser */}
        <View style={styles.section}>
          <TutorBrowser />
        </View>
        {/* Upcoming Sessions */}
        <View style={styles.section}>
          <UpcomingSessions />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  content: { marginTop: 20 },
  section: { marginBottom: 40 },
});
