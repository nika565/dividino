import { StyleSheet } from 'react-native';

// Estilo do display
export const estilos = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    width: '90%',
    height: '30%',

    marginTop: -50,
  },

  display: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingRight: 20,

    width: '100%',
    height: '100%',

    backgroundColor: '#A075A0',

    borderRadius: 10,
    elevation: 10, //Sombra para Android

    // Sombra para IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },

  expressao: {
    display: 'flex',
    height: '30%',
  },

  textoExpressao: {
    fontSize: 35,
    color: 'white',

    margin: 10,
  },

  resultado: {
    height: '70%',
  },

  textoResultado: {
    fontSize: 40,
    color: '#604671',

    margin: 10,
  },
});
