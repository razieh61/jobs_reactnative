//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ReviewFlow() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          headerTitle: "Review Jobs",
          headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Settings')}
            title="Go to Settings"
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0,122,255,1)"
          />
            ),
          style: {
            marginTop: Platform.OS === 'android' ? 24 : 0
          }
          }}
         />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function MainFlow() {
  return (
    <Tab.Navigator initialRouteName="Map">
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Deck" component={DeckScreen} />
      <Tab.Screen name="Review" component={ReviewFlow} />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{tabBarVisible: false}}
    >
      <Tab.Screen name="welcome" component={WelcomeScreen} />
      <Tab.Screen name="auth" component={AuthScreen} />
      <Tab.Screen name="main" component={MainFlow} />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
