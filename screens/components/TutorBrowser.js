import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getTutors } from '../../backend/api/tutorApi';

// const tutors = [
//   {
//     id: '1',
//     name: 'John Doe',
//     subject: 'Mathematics',
//     rating: 4.8,
//     profilePicture: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     subject: 'Physics',
//     rating: 4.5,
//     profilePicture: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     name: 'Alice Johnson',
//     subject: 'Chemistry',
//     rating: 4.7,
//     profilePicture: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '4',
//     name: 'Mike Brown',
//     subject: 'Biology',
//     rating: 4.6,
//     profilePicture: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '5',
//     name: 'Emily White',
//     subject: 'English',
//     rating: 4.9,
//     profilePicture: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '6',
//     name: 'David Lee',
//     subject: 'History',
//     rating: 4.3,
//     profilePicture: 'https://via.placeholder.com/150',
//   },
// ];

const TutorBrowser = () => {
  const [loading, setLoading] = useState(false);
  const [tutors, setTutors] = useState([]);
  const navigation = useNavigation(); // Use the navigation hook

  // // Simulate API call
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // Fetch tutors from the API
  useEffect(() => {
    const fetchTutors = async () => {
      setLoading(true);
      try {
        const response = await getTutors();
        setTutors(response.data); // Assuming the API returns an array of tutors in `response.data`
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch tutors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const renderTutorCard = ({ item }) => (
    <TouchableOpacity style={styles.card}
      onPress={() =>
        navigation.navigate('TutorDetailsPage', { tutor: item })
      }
    >
      <View>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subject}>{item.expertise}</Text>
      </View>
    </TouchableOpacity>
  );

  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Browse Tutors</Text>
      <FlatList
        data={tutors}
        renderItem={renderTutorCard}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display 3 cards in a row
        columnWrapperStyle={styles.row} // Style for rows
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1, // Ensures cards take equal width
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subject: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TutorBrowser;
