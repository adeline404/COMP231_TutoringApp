// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import LearnerRegister from './screens/LearnerRegister';
import TutorRegister from './screens/TutorRegister';
import TutorBrowser from './screens/components/TutorBrowser';
import TutorProfileManager from './screens/components/TutorProfileManager';
import LearnerHomepage from './screens/LearnerHomepage';
import TutorHomepage from './screens/TutorHomepage';
import TutorDetailsPage from './screens/components/TutorDetailsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LearnerRegister" component={LearnerRegister} />
        <Stack.Screen name="TutorRegister" component={TutorRegister} />
        <Stack.Screen name="LearnerHomepage" component={LearnerHomepage} />
        <Stack.Screen name="TutorHomepage" component={TutorHomepage} /> 
        <Stack.Screen name="TutorProfileManager" component={TutorProfileManager} />
				<Stack.Screen name="TutorBrowser" component={TutorBrowser} />
        <Stack.Screen name="TutorDetailsPage" component={TutorDetailsPage} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
