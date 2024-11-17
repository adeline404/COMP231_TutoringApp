// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
<<<<<<< HEAD
import { loginLearner } from '../api/learnerApi';
import { loginTutor } from '../api/tutorApi';
=======
>>>>>>> 580b3c77495da8adbf1056e8d977f74892be9a30

const LEARNERS_KEY = 'learners';
const TUTORS_KEY = 'tutors';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
<<<<<<< HEAD
    // // Load latest data from AsyncStorage
    // const learnersData = await AsyncStorage.getItem(LEARNERS_KEY);
    // const tutorsData = await AsyncStorage.getItem(TUTORS_KEY);
    // const learners = learnersData ? JSON.parse(learnersData) : [];
    // const tutors = tutorsData ? JSON.parse(tutorsData) : [];

    // // Check if user exists in learners or tutors data
    // const user = [...learners, ...tutors].find(
    //   (user) => user.email === email && user.password === password
    // );

    // if (user) {
    //   if (learners.some((learner) => learner.email === email)) {
    //     navigation.navigate('LearnerHomepage');
    //   } else {
    //     navigation.navigate('TutorHomepage');
    //   }
    // } else {
    //   Alert.alert('Login Failed', 'Invalid email or password');
    // }

    try {
      // Attempt learner login
      const learnerResponse = await loginLearner({ email, password });
      if (learnerResponse.status === 200) {
        const learner = learnerResponse.data;
        navigation.navigate('LearnerHomepage', { learner });
        return;
      }
    } catch (err) {
      // If learner login fails, try tutor login
      try {
        const tutorResponse = await loginTutor({ email, password });
        if (tutorResponse.status === 200) {
          const tutor = tutorResponse.data;
          navigation.navigate('TutorHomepage', { tutor });
          return;
        }
      } catch (err) {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
=======
    // Load latest data from AsyncStorage
    const learnersData = await AsyncStorage.getItem(LEARNERS_KEY);
    const tutorsData = await AsyncStorage.getItem(TUTORS_KEY);
    const learners = learnersData ? JSON.parse(learnersData) : [];
    const tutors = tutorsData ? JSON.parse(tutorsData) : [];

    // Check if user exists in learners or tutors data
    const user = [...learners, ...tutors].find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      if (learners.some((learner) => learner.email === email)) {
        navigation.navigate('LearnerHomepage');
      } else {
        navigation.navigate('TutorHomepage');
      }
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
>>>>>>> 580b3c77495da8adbf1056e8d977f74892be9a30
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Tutoring App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('LearnerRegister')}>
          Register as Learner
        </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('TutorRegister')}>
          Register as Tutor
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
  linkContainer: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
  link: { color: 'blue', textDecorationLine: 'underline', marginHorizontal: 10 },
});
