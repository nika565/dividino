import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ConversorTemperatura from "../components/Conversor";

function TelaTemperatura( { navigation } ){
    return(
        <View style={estilos.tela}>

        <View style={estilos.linhaAppbar}>
          <TouchableOpacity onPress={() => navigation.navigate('Medida')} style={estilos.botaoAppbar}>
            <Image source={require('../../assets/icon/governante.png')} style={estilos.icone}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Calculadora')} style={estilos.botaoAppbar}>
            <Image source={require('../../assets/icon/abaco.png')} style={estilos.icone}/>
          </TouchableOpacity>
        </View>

            <ConversorTemperatura />
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: {
        backgroundColor: "#604671",
        width: "100%",
        height: "100%",
    },

    linhaAppbar:{
        display: "flex",
        flexDirection: "row-reverse",
      },
    
      botaoAppbar:{
        backgroundColor: "#646494",
        borderRadius: 50,
        padding: 10,
    
        margin: 10,
      },
    
      icone: {
        width: 30,
        height: 30,
      },
})

export default TelaTemperatura;