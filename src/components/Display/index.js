import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import estilo from './estilo';
import * as Font from 'expo-font';

const Display = () => {
  useEffect(() => {
    Font.loadAsync({
      ShortStack: require('../../../assets/fonts/ShortStack.ttf'),
    });
  }, []);

  return(
    <View style={estilo.display}>
      <View style={[estilo.operacao, estilo.posicaoTexto]}><Text style={[estilo.textoOperacao, estilo.texto]}>450+500+1000</Text></View>
      <View style={[estilo.resultado, estilo.posicaoTexto]}><Text style={[estilo.textoResultado, estilo.texto]}>1950</Text></View>
    </View>
  );
}

export default Display;