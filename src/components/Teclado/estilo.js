import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

  areaBotao:{
    width: '90%',
    height: '55%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  linhaBotao:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
    height: '15%',
  },

  botao:{
    width: '20%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 3,
    
    elevation: 10, //Sombra para Android

    // Sombra para IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },

  numero:{
    backgroundColor: "#A290BC",
  },


  sinal:{
    backgroundColor: "#646494",
  },

  zero:{
    height: '100%',
    width: '47%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#A290BC',

    borderRadius: 3,

    elevation: 10, //Sombra para Android

    // Sombra para IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },

  texto:{
    color: "#fff",
    fontFamily: "ShortStack",
    fontSize: 20,
  }
});

export default estilo;