import React from "react";
import {View, TouchableOpacity, Image } from 'react-native';
import ConversorMedida from "../../components/ConversorMedida/index";
import estilos from "./estilos";

function TelaMedida( { navigation } ){
    return(
        <View style={estilos.tela}>

        <View style={estilos.linhaAppbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Temperatura')} style={estilos.botaoAppbar}>
            <Image source={require('../../../assets/icon/fogo.png')} style={estilos.icone}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Calculadora')} style={estilos.botaoAppbar}>
            <Image source={require('../../../assets/icon/abaco.png')} style={estilos.icone}/>
          </TouchableOpacity>
        </View>

            <ConversorMedida />
        </View>
    );
}

export default TelaMedida;