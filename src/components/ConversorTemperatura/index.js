import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, KeyboardAvoidingView, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import estilos from "./estilos";

function ConversorTemperatura() {
    const [areaConversao, setAreaConversao] = useState('Graus Celsius (°C)');
    const [areaConversao2, setAreaConversao2] = useState('Graus Fahrenheit (°F)');
    const [textoConversao, setTextoConversao] = useState('');
    const [textoConversao2, setTextoConversao2] = useState('');

    function converter(texto) {
        setTextoConversao(texto);
        
        if (areaConversao === areaConversao2) {
            console.log(texto);
            setTextoConversao2(texto);
        } else {
            // Realizar a conversão
        }
    }

    function converterReverso(texto) {
        setTextoConversao2(texto);
        
        if (areaConversao2 === areaConversao) {
            console.log(texto);
            setTextoConversao(texto);
        } else {
            // Realizar a conversão reversa
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={estilos.areaConverte}>
            <View style={estilos.container}>
                <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradienteDropdown}>
                    <Picker selectedValue={areaConversao} onValueChange={(itemValor) => setAreaConversao(itemValor)} style={estilos.dropdown}>
                        <Picker.Item label="Graus Celsius (°C)" value="Graus Celsius (°C)"/>
                        <Picker.Item label="Kelvin (K)" value="Kelvin (K)"/>
                        <Picker.Item label="Graus Fahrenheit (°F)" value="Graus Fahrenheit (°F)"/>
                    </Picker>
                </LinearGradient>

                <LinearGradient colors={['#614387', '#A075A0']} start={{ x: 1.4, y: 0 }} style={estilos.gradienteTemperatura}>
                    <TextInput onChangeText={(texto) => converter(texto)} value={textoConversao} style={estilos.input} keyboardType='numeric'/>
                </LinearGradient>
            </View>

            <Image source={require('../../../assets/icon/seta-para-baixo.png')} style={estilos.seta}/>

            <View style={estilos.container}>
                <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradienteDropdown}>
                    <Picker selectedValue={areaConversao2} onValueChange={(itemValor) => setAreaConversao2(itemValor) } style={estilos.dropdown}>
                        <Picker.Item label="Graus Celsius (°C)" value="Graus Celsius (°C)"/>
                        <Picker.Item label="Kelvin (K)" value="Kelvin (K)"/>
                        <Picker.Item label="Graus Fahrenheit (°F)" value="Graus Fahrenheit (°F)"/>
                    </Picker>
                </LinearGradient>

                <LinearGradient colors={['#614387', '#A075A0']} start={{ x: 1.4, y: 0 }} style={estilos.gradienteTemperatura}>
                    <TextInput onChangeText={(texto) => converterReverso(texto)} value={textoConversao2} style={estilos.input} keyboardType='numeric'/>
                </LinearGradient>
            </View>
        </KeyboardAvoidingView>
    );
}

export default ConversorTemperatura;
