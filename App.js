import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/AppBar/AppNavigator";

// Exibição principal do app
export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>

  );
}