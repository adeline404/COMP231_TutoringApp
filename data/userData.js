// data/userData.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const LEARNERS_KEY = 'learners';
const TUTORS_KEY = 'tutors';

// Default learners and tutors
const defaultLearners = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', password: 'alice123', subject: 'Mathematics' },
  { id: '2', name: 'Bob Johnson', email: 'bob@example.com', password: 'bob123', subject: 'Physics' },
  { id: '3', name: 'Carol Williams', email: 'carol@example.com', password: 'carol123', subject: 'Chemistry' },
];

const defaultTutors = [
  { id: '1', name: 'Professor Xavier', email: 'xavier@example.com', password: 'xavier123', expertise: 'Mathematics' },
  { id: '2', name: 'Dr. Strange', email: 'strange@example.com', password: 'strange123', expertise: 'Physics' },
  { id: '3', name: 'Ms. Marvel', email: 'marvel@example.com', password: 'marvel123', expertise: 'Chemistry' },
];

// Initialize learners and tutors with defaults or from AsyncStorage
let learners = defaultLearners;
let tutors = defaultTutors;

const loadUsers = async () => {
  const learnersData = await AsyncStorage.getItem(LEARNERS_KEY);
  const tutorsData = await AsyncStorage.getItem(TUTORS_KEY);
  learners = learnersData ? JSON.parse(learnersData) : defaultLearners;
  tutors = tutorsData ? JSON.parse(tutorsData) : defaultTutors;
};

// Save learners and tutors to AsyncStorage
const saveUsers = async (key, data) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

const addLearner = async (newLearner) => {
  newLearner.id = (learners.length + 1).toString();
  learners.push(newLearner);
  await saveUsers(LEARNERS_KEY, learners);
};

const addTutor = async (newTutor) => {
  newTutor.id = (tutors.length + 1).toString();
  tutors.push(newTutor);
  await saveUsers(TUTORS_KEY, tutors);
};

// Call loadUsers to initialize the data from AsyncStorage if available
loadUsers();

export { learners, tutors, addLearner, addTutor };
