import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Teclado from './src/components/Teclado/index';
import Display from './src/components/Display/index';

function App(){
  return(
    <View style={styles.screen}>
      <Display />
      <Teclado />
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor: "#604671",
    width: "100%",
    height: "100%",

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;
