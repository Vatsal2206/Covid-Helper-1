import * as React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

import CreateAccountScreen from './screens/CreateAccountScreen';
import { AppTabNavigator } from './components/BottomTabNavigator';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return <AppContainer />;
}

const SwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginScreen },
  CreateAccount: { screen: CreateAccountScreen },
  BottomTab: { screen: AppTabNavigator },
  Drawer: { screen: AppDrawerNavigator },
});
const AppContainer = createAppContainer(SwitchNavigator);
