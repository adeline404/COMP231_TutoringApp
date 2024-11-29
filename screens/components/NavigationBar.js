import React from 'react';
import { View, Text, Button } from 'react-native';

const NavigationBar = ({ setCurrentView }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent:'space-around', padding: 20 }}>
      <Button title="Learner" onPress={() => setCurrentView('Learner')} />
      <Button title="Tutor" onPress={() => setCurrentView('Tutor')} />
    </View>
  );
};

export default NavigationBar;
