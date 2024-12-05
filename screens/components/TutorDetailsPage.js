import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TutorProfileManager from './TutorProfileManager';
import TutorScheduleManager from './TutorScheduleManager';

const TutorDetailsPage = ({ route }) => {
  const { tutor } = route?.params || {};

  if (!tutor) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: No tutor data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Display the tutor's profile */}
      <TutorProfileManager tutor={tutor} showManageButton={false} />

      {/* Display the tutor's schedule */}
      <TutorScheduleManager schedule={tutor.schedule} editable={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default TutorDetailsPage;
