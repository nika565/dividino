import { View, Text } from 'react-native';
import { estilos } from './estilo';
// Display que vai exibir os cálculos e seus resultados
export default function Display(props) {

    return(

        // Container "pai" do display
        <View style={estilos.container}>

            {/* Dislpay onde vai ser exibido os cálculos e os resultados */}
            <View style={estilos.display}>

                {/* Expressão */}
                <Text style={estilos.expressao}>450 + 500 + 1000</Text>
                
                {/* Mostrando o resultado */}
                <Text style={estilos.resultado}>1950</Text>
                
            </View>

        </View>

    );

}