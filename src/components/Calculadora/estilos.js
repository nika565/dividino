import { StyleSheet } from 'react-native';

// Estilização do teclado
export const estilos = StyleSheet.create({
  calculadora: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 40,
  },

  teclado: {
    width: '100%',
    height: '50%',

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },

  botao: {
    width: '20%',
    height: '20%',

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 3,

    elevation: 10, //Sombra para Android

    // Sombra para IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },

  numero: {
    backgroundColor: '#A290BC',
  },

  sinal: {
    backgroundColor: '#646494',
  },

  zero: {
    width: '43%',
    height: '20%',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#A290BC',

    borderRadius: 3,

    elevation: 10, //Sombra para Android

    // Sombra para IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },

  texto: {
    color: '#fff',
    // fontFamily: 'ShortStack',
    fontSize: 20,
  },
});
