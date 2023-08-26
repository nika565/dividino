import { StyleSheet, Text, View } from 'react-native';
import Display from './src/components/Display';
import Teclado from './src/components/Teclado';

// Exibição principal do app
export default function App() {

  return (
    <View style={estilos.container}>
      <Display/>
      <Teclado/>
    </View>
  );

}

// Estilização dos componentes principais do app
const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
