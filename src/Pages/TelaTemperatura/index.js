import React from "react";
import {View, TouchableOpacity, Image } from 'react-native';
import ConversorTemperatura from "../../components/ConversorTemperatura/index";
import estilos from "./estilos";

function TelaTemperatura( { navigation } ){
    return(
        <View style={estilos.tela}>

        <View style={estilos.linhaAppbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Medida')} style={estilos.botaoAppbar}>
            <Image source={require('../../../assets/icon/governante.png')} style={estilos.icone}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Calculadora')} style={estilos.botaoAppbar}>
            <Image source={require('../../../assets/icon/abaco.png')} style={estilos.icone}/>
          </TouchableOpacity>
        </View>

            <ConversorTemperatura />
        </View>
    );
}

export default TelaTemperatura;