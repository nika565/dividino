import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Calculadora from '../../components/Calculadora/index';
import estilos from "./estilos";

function TelaCalculadora( { navigation } ){
    return(
      <View style={estilos.tela}>
        
        <View style={estilos.linhaAppbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Medida')} style={estilos.botaoAppbar}>
            <Image source={require('../../../assets/icon/governante.png')} style={estilos.icone}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Temperatura')} style={estilos.botaoAppbar}>
            <Image source={require('../../../assets/icon/fogo.png')} style={estilos.icone}/>
          </TouchableOpacity>
        </View>
        
        <Calculadora/>

      </View>
    );
}

export default TelaCalculadora;