import React from "react";
import {Picker} from "@react-native-picker/picker";
import { View, Text, TextInput, StyleSheet } from "react-native";

function ConversorTemperatura(){
    return (
        <View style={estilos.areaConverte}>

            <View style={estilos.container}>
                <Picker style={estilos.escolheTemperatura}>
                    <Picker.Item label="Temperatura" value=""/>
                </Picker>

                <TextInput style={estilos.digitaTemperatura}/>
            </View>

            <View style={estilos.container}>
                <Picker style={estilos.escolheTemperatura}>
                    <Picker.Item label="Temperatura" value=""/>
                </Picker>

                <View style={estilos.digitaTemperatura}></View>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    areaConverte: {
        width: "87%",
        height: "55%",

        marginTop: 20,

        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    container: {
        height: '37%',
    },

    escolheTemperatura: {
        backgroundColor: "#A290BC",

        height: "50%",

        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

        elevation: 5, //Sombra para Android

        // Sombra para IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 4, // Raio da sombra

        zIndex: 1,
    },

    digitaTemperatura: {
        backgroundColor: "#A075A0",

        height: "50%",

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

        margin: 0,
    },
})

export default ConversorTemperatura;