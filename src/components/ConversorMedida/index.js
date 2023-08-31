import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, KeyboardAvoidingView, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import estilos from "./estilos";

function ConversorMedida(){


    // Variáveis useState para alterar o valor do Picker
    const [areaConversao, setAreaConversao] = useState('Metro');
    const [areaConversao2, setAreaConversao2] = useState('Quilômetro');

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

        } else if (areaConversao === 'Metro' && areaConversao2 === 'Quilômetro') {

            // Conversão Metro para Quilômetro
            const km = Number(texto) / 1000

            // Caso retorne algo inválido
            if (isNaN(km)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(km.toString());
            }
            
        } else if (areaConversao === 'Metro' && areaConversao2 === 'Centímetro') {
            
            // Conversão Metro para Centímetro
            const cm = Number(texto) * 100;
            
            // Caso retorne algo inválido
            if (isNaN(cm)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(cm.toString());
            }

        } else if (areaConversao === 'Quilômetro' && areaConversao2 === 'Centímetro') {

            // Conversão Quilômetro para Centímetro
            // Centímetros = Quilômetros * 100000
            const cm = Number(texto) * 100000
            
            // Caso retorne algo inválido
            if (isNaN(cm)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(cm.toString());
            }

        } else if (areaConversao === 'Quilômetro' && areaConversao2 === 'Metro') {

            // Conversão de Quilômetro para Metro
            const metro = Number(texto) * 1000
            
            // Caso retorne algo inválido
            if (isNaN(metro)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(metro.toString());
            }

        } else if (areaConversao === 'Centímetro' && areaConversao2 === 'Metro') {
            
            // Conversão de Centímetro para Metro
            const metro = Number(texto) / 100
            
            // Caso retorne algo inválido
            if (isNaN(metro)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(metro.toString());
            }

        } else {

            // Conversão de Centímetro para Quilômetro
            // Quilômetros = Centímetros / 100000
            const km = Number(texto) / 100000
            
            // Caso retorne algo inválido
            if (isNaN(km)) {
                setTextoConversao2('Operação inválida...')
            } else {
                setTextoConversao2(km.toString());
            }

        }
    }

    // Função para realizar a conversao e mostrar no Primeiro input
    function converterReverso(texto) {

        setTextoConversao2(texto);
        
        // Condicionais para saber qual cálculo será realizado
        if (areaConversao === areaConversao2) {

            // Caso o picker estiver com os valores iguais será replicado a mesma temperatura nos dois inputs
            setTextoConversao(texto);

        } else if (areaConversao2 === 'Metro' && areaConversao === 'Quilômetro') {

            // Conversão Metro para Quilômetro
            const km = Number(texto) / 1000

            // Caso retorne algo inválido
            if (isNaN(km)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(km.toString());
            }
            
        } else if (areaConversao2 === 'Metro' && areaConversao === 'Centímetro') {
            
            // Conversão Metro para Centímetro
            const cm = Number(texto) * 100;
            
            // Caso retorne algo inválido
            if (isNaN(cm)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(cm.toString());
            }

        } else if (areaConversao2 === 'Quilômetro' && areaConversao === 'Centímetro') {

            // Conversão Quilômetro para Centímetro
            // Centímetros = Quilômetros * 100000
            const cm = Number(texto) * 100000
            
            // Caso retorne algo inválido
            if (isNaN(cm)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(cm.toString());
            }

        } else if (areaConversao2 === 'Quilômetro' && areaConversao === 'Metro') {

            // Conversão de Quilômetro para Metro
            const metro = Number(texto) * 1000
            
            // Caso retorne algo inválido
            if (isNaN(metro)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(metro.toString());
            }

        } else if (areaConversao2 === 'Centímetro' && areaConversao === 'Metro') {
            
            // Conversão de Centímetro para Metro
            const metro = Number(texto) / 100
            
            // Caso retorne algo inválido
            if (isNaN(metro)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(metro.toString());
            }

        } else {

            // Conversão de Centímetro para Quilômetro
            // Quilômetros = Centímetros / 100000
            const km = Number(texto) / 100000
            
            // Caso retorne algo inválido
            if (isNaN(km)) {
                setTextoConversao('Operação inválida...')
            } else {
                setTextoConversao(km.toString());
            }

        }        
        
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={estilos.areaConverte}>
            <View style={estilos.container}>
                <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradienteDropdown}>
                    <Picker selectedValue={areaConversao} onValueChange={(itemValor) => setAreaConversao(itemValor)} style={estilos.dropdown}>
                        <Picker.Item label="Metro" value="Metro"/>
                        <Picker.Item label="Centímetro" value="Centímetro"/>
                        <Picker.Item label="Quilômetro" value="Quilômetro"/>
                    </Picker>
                </LinearGradient>

                <LinearGradient colors={['#614387', '#A075A0']} start={{ x: 1.4, y: 0 }} style={estilos.gradienteMedida}>
                <TextInput onChangeText={(texto) => converter(texto)} value={textoConversao} style={estilos.input} keyboardType='numeric'/>
                </LinearGradient>
            </View>

            <Image source={require('../../../assets/icon/seta-para-baixo.png')} style={estilos.seta}/>

            <View style={estilos.container}>
                <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradienteDropdown}>
                    <Picker selectedValue={areaConversao2} onValueChange={(itemValor) => setAreaConversao2(itemValor)} style={estilos.dropdown}>
                        <Picker.Item label="Metro" value="Metro"/>
                        <Picker.Item label="Centímetro" value="Centímetro"/>
                        <Picker.Item label="Quilômetro" value="Quilômetro"/>
                    </Picker>
                </LinearGradient>

                <LinearGradient colors={['#614387', '#A075A0']} start={{ x: 1.4, y: 0 }} style={estilos.gradienteMedida}>
                <TextInput onChangeText={(texto) => converterReverso(texto)} value={textoConversao2} style={estilos.input} keyboardType='numeric'/>
                </LinearGradient>
            </View>
        </KeyboardAvoidingView>
    );
}

export default ConversorMedida;