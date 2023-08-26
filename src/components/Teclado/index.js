import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import estilo from './estilo';
import * as Font from 'expo-font';

const Teclado = () => {
    useEffect(() => {
    Font.loadAsync({
      ShortStack: require('../../../assets/fonts/ShortStack.ttf'),
    });
  }, []);

  return(
    <View style={estilo.areaBotao}>
      <View style={estilo.linhaBotao}>
        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>:</Text>
        </TouchableOpacity>
      </View>

      <View style={estilo.linhaBotao}>
        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={estilo.linhaBotao}>
        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={estilo.linhaBotao}>
        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.numero, estilo.botao]}>
          <Text style={estilo.texto}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={estilo.linhaBotao}>
        <TouchableOpacity style={estilo.zero}>
          <Text style={estilo.texto}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.sinal, estilo.botao]}>
          <Text style={estilo.texto}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Teclado;