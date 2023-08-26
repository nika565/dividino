import { StyleSheet } from "react-native";

// Estilo do display
export const estilos = StyleSheet.create({

    container: {
        flex: 0.4,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },

    display: {
        flex: 0.7,
        marginTop: 35,
        width: '90%',
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-end',
        gap: 50
    },

    expressao: {
        fontSize: 24,
        color: 'white'
    },

    resultado: {
        fontSize: 50,
        color: 'white'
    }

});
