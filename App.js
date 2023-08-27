import { StyleSheet, Text, View } from 'react-native';
import Display from './src/components/Display';
import Calculadora from './src/components/Calculadora';

// Exibição principal do app
export default function App() {

  return (
    <View style={estilos.container}>
      <Calculadora/>
    </View>

  );
}

const estilos = StyleSheet.create({
  container:{
    backgroundColor: "#604671",
    width: "100%",
    height: "100%",
  },
});