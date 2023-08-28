import { View, Text } from 'react-native';
import { estilos } from './estilos';
// Display que vai exibir os cálculos e seus resultados
export default function Display(props) {
  return (
    // Container "pai" do display
    <View style={estilos.container}>
      {/* Dislpay onde vai ser exibido os cálculos e os resultados */}
      <View style={estilos.display}>
        
        {/* Expressão */}
        <View style={estilos.expressao}>
          <Text style={estilos.textoExpressao}>{props.expressao}</Text>
        </View>

        {/* Mostrando o resultado */}
        <View style={estilos.resultado}>
          <Text style={estilos.textoResultado}>{props.resultado}</Text>
        </View>
      </View>
    </View>
  );
}
