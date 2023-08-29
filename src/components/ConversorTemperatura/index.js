import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, KeyboardAvoidingView, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import estilos from "./estilos";

function ConversorTemperatura(){
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={estilos.areaConverte}>
            <View style={estilos.container}>
                <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradienteDropdown}>
                    <Picker style={estilos.dropdown}>
                            <Picker.Item label="Temperatura" value=""/>
                    </Picker>
                </LinearGradient>

                <LinearGradient colors={['#614387', '#A075A0']} start={{ x: 1.4, y: 0 }} style={estilos.gradienteTemperatura}>
                    <TextInput style={estilos.input}/>
                </LinearGradient>
            </View>

            <Image source={require('../../../assets/icon/seta-para-baixo.png')} style={estilos.seta}/>

            <View style={estilos.container}>
                <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradienteDropdown}>
                    <Picker style={estilos.dropdown}>
                            <Picker.Item label="Temperatura" value=""/>
                    </Picker>
                </LinearGradient>

                <LinearGradient colors={['#614387', '#A075A0']} start={{ x: 1.4, y: 0 }} style={estilos.gradienteTemperatura}>
                    <TextInput style={estilos.input}/>
                </LinearGradient>
            </View>
        </KeyboardAvoidingView>
    );
}

export default ConversorTemperatura;