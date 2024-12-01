// screens/TutorHomepage.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TutorProfileManager from './components/TutorProfileManager';
import TutorScheduleManager from './components/TutorScheduleManager';

export default function TutorHomepage({ route }) {
  const { tutor } = route.params; // Access the passed tutor object

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor Homepage</Text>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Profile Section */}
        <View style={styles.section}>
          <TutorProfileManager tutor={tutor} />
        </View>
        {/* Schedule */}
        <View style={styles.section}>
          <TutorScheduleManager />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  content: { marginTop: 20 },
  section: { marginBottom: 40 }
});
