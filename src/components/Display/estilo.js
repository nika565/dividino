import React from 'react';
import {StyleSheet} from 'react-native';
const estilo = StyleSheet.create({
  display:{
    backgroundColor: "#A075A0",

    width: '90%',
    height: '25%',

    borderRadius: 10,

    elevation: 10, //Sombra para Android

    // Sombra para IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },

  posicaoTexto:{
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  operacao:{
    width: '100%',
    height: '30%',
  },

  resultado:{
    width: '100%',
    height: '70%',
  },

  texto:{
    margin: 15,
    fontFamily: 'ShortStack',
  },

  textoOperacao:{
    fontSize: 17,
    color: "#fff",
  },

  textoResultado:{
    fontSize: 50,
    color: "#604671",
  }
});

export default estilo;