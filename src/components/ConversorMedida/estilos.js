import React from "react";
import { StyleSheet } from "react-native";

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
        borderRadius: 5,
    },

    gradienteDropdown: {
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

    gradienteMedida: {
        height: "50%",

        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,

        margin: 0,
    },

    input:{
        height: "100%",
        textAlign: "center",
        color: "#fff",
    },
    
    dropdown:{
        color: "#fff",
    },

    seta:{
        width: "10%",
        height: "10%",

        alignSelf: "center",
    }
});

export default estilos;