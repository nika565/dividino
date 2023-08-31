import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, KeyboardAvoidingView, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import estilos from "./estilos";

function ConversorTemperatura() {
    
    // Variáveis useState para alterar o valor do Picker
    const [areaConversao, setAreaConversao] = useState('Graus Celsius (°C)');
    const [areaConversao2, setAreaConversao2] = useState('Graus Fahrenheit (°F)');

    // Variáveis useState para alterar o valor dos inputs
    const [textoConversao, setTextoConversao] = useState('');
    const [textoConversao2, setTextoConversao2] = useState('');

    // Função para realizar a conversao e mostrar no segundo input
    function converter(texto) {

        setTextoConversao(texto);
        
        // Condicionais para saber qual cálculo será realizado
        if (areaConversao === areaConversao2) {

            // Caso o picker estiver com os valores iguais será replicado a mesma temperatura nos dois inputs
            setTextoConversao2(texto);

        } else if (areaConversao === 'Graus Celsius (°C)' && areaConversao2 === 'Kelvin (K)') {

            // Conversão Celsius para Kelvin
            const kelvin = Number(texto) + 273.15

            // Caso retorne algo inválido
            if (isNaN(kelvin)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(kelvin.toString());
            }
            
        } else if (areaConversao === 'Graus Celsius (°C)' && areaConversao2 === 'Graus Fahrenheit (°F)') {
            
            // Conversão Celsius para Fahrenheit
            const fahrenheit = (Number(texto) * 9/5) + 32
            
            // Caso retorne algo inválido
            if (isNaN(fahrenheit)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(fahrenheit.toString());
            }

        } else if (areaConversao === 'Kelvin (K)' && areaConversao2 === 'Graus Fahrenheit (°F)') {

            // Conversão Kelvin para Fahrenheit
            //fahrenheit = (Kelvin - 273.15) * 9/5 + 32
            const fahrenheit = (Number(texto) - 273.15) * 9/5 + 32
            
            // Caso retorne algo inválido
            if (isNaN(fahrenheit)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(fahrenheit.toString());
            }

        } else if (areaConversao === 'Kelvin (K)' && areaConversao2 === 'Graus Celsius (°C)') {

            // Conversão de Kelvin para Celsius
            const celsius = Number(texto) - 273.15
            
            // Caso retorne algo inválido
            if (isNaN(celsius)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(celsius.toString());
            }

        } else if (areaConversao === 'Graus Fahrenheit (°F)' && areaConversao2 === 'Graus Celsius (°C)') {
            
            // Conversão de Fahrenheit para Celsius
            const celsius = (Number(texto) - 32) * 5/9
            
            // Caso retorne algo inválido
            if (isNaN(celsius)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(celsius.toString());
            }

        } else {

            // Conversão de Fahrenheit para Kelvin
            // Kelvin = (Fahrenheit - 32) * 5/9 + 273.15
            const kelvin = (Number(texto) -32) *5/9 + 273.15
            
            // Caso retorne algo inválido
            if (isNaN(kelvin)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(kelvin.toString());
            }

        }
    }

    // Função para realizar a conversao e mostrar no Primeiro input
    function converterReverso(texto) {

        setTextoConversao2(texto);
        
        // Condicionais para saber qual cálculo será realizado
        if (areaConversao2 === areaConversao) {
            console.log(texto);
            setTextoConversao(texto);
        } else if (areaConversao2 === 'Graus Celsius (°C)' && areaConversao === 'Kelvin (K)') {

            // Conversão Celsius para Kelvin
            const kelvin = Number(texto) + 273.15

            // Caso retorne algo inválido
            if (isNaN(kelvin)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(kelvin.toString());
            }
            
        } else if (areaConversao2 === 'Graus Celsius (°C)' && areaConversao === 'Graus Fahrenheit (°F)') {

            // Conversão Celsius para Fahrenheit
            const fahrenheit = (Number(texto) * 9/5) + 32
            
            // Caso retorne algo inválido
            if (isNaN(fahrenheit)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(fahrenheit.toString());
            }

        } else if (areaConversao2 === 'Kelvin (K)' && areaConversao === 'Graus Fahrenheit (°F)') {

            // Conversão Kelvin para Fahrenheit
            //fahrenheit = (Kelvin - 273.15) * 9/5 + 32
            const fahrenheit = (Number(texto) - 273.15) * 9/5 + 32
            
            // Caso retorne algo inválido
            if (isNaN(fahrenheit)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(fahrenheit.toString());
            }

        } else if (areaConversao2 === 'Kelvin (K)' && areaConversao === 'Graus Celsius (°C)') {

            // Conversão de Kelvin para Celsius
            const celsius = Number(texto) - 273.15
            
            // Caso retorne algo inválido
            if (isNaN(celsius)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(celsius.toString());
            }

        } else if (areaConversao2 === 'Graus Fahrenheit (°F)' && areaConversao === 'Graus Celsius (°C)') {

            // Conversão de Fahrenheit para Celsius
            const celsius = (Number(texto) - 32) * 5/9
            
            // Caso retorne algo inválido
            if (isNaN(celsius)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(celsius.toString());
            }

        } else {

            // Conversão de Fahrenheit para Kelvin
            // Kelvin = (Fahrenheit - 32) * 5/9 + 273.15
            const kelvin = (Number(texto) -32) *5/9 + 273.15
            
            // Caso retorne algo inválido
            if (isNaN(kelvin)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(kelvin.toString());
            }

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
