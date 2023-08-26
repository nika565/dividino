import { StyleSheet } from "react-native";

// Estilização do teclado
export const estilos = StyleSheet.create({

    containerTeclado:{
        flex: 0.6,
        backgroundColor: 'blue',
        padding: 15
    },

    teclado: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        padding: 20
    },
    
    botao: {
        width: 75,
        height: 80,
        backgroundColor: 'orangered',
        alignItems: 'center',
        justifyContent: 'center',
    },

    zero: {
        width: 160,
        height: 80,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
});