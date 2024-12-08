import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Modal,
  Image,
} from 'react-native';
import ManageProfileButton from './ManageProfileButton'; // Import the new component

const LearnerProfileManager = (props) => {
  const [profile, setProfile] = useState({
    name: props.learner.name,
    email: props.learner.email,
    subject: props.learner.subject,
    profilePicture: require('../assets/1.png'), // Use local image
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    Alert.alert('Profile Saved', `Name: ${profile.name}, Email: ${profile.email}`);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <Image source={profile.profilePicture} style={styles.profileImage} />

        {/* User Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>
      </View>

      {/* Manage Profile Button */}
      <ManageProfileButton onPress={() => setModalVisible(true)} />

      {/* Modal for Editing Profile */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            />
            {/* Use Text or a styled non-editable TextInput for Email */}
			<Text style={styles.textDisplay}>
			  {profile.email}
			</Text>
            <Button title="Save Changes" onPress={handleSave} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  nonEditable: {
    backgroundColor: '#f0f0f0',
    color: '#888',
  },
  textDisplay: {
    fontSize: 16,
    color: '#888', // Adjust as needed
	backgroundColor: '#f0f0f0'
  },
});

export default LearnerProfileManager;
