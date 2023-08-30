import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, KeyboardAvoidingView, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import estilos from "./estilos";

function ConversorTemperatura(){

    // Variáveis do useState para manipular a seleção do dropdown
    const [areaConversao, setAreaConversao] = useState('Graus Celsius (°C)');
    const [areaConversao2, setAreaConversao2] = useState('Graus Fahrenheit (°F)');

    // Variáveis do useState para manipular o resultado da conversão
    const [textoConversao, setTextoConversao] = useState(null);
    const [textoConversao2, setTextoConversao2] = useState(null);

    
    
    // Função para converter em realação ao primeiro input
    function converter(texto) {
        
        // Verificando a escala de temperatura selecionada
        if (areaConversao == areaConversao2) {
            setTextoConversao2(texto);
        } 

    }

    // Função para converter em realação ao segundo input
    function converterReverso(texto) {

        // Verificando a escala de temperatura selecionada
        // Verificando a escala de temperatura selecionada
        if (areaConversao == areaConversao2) {
            setTextoConversao(texto);
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