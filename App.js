import { StyleSheet, Text, View } from 'react-native';
// import Display from './src/components/Display';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/AppBar/AppNavigator";
// import Calculadora from './src/components/Calculadora';

// Exibição principal do app
export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>

  );
}