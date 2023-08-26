import { View, Text, TouchableOpacity } from 'react-native';
import { estilos } from './estilo';
// Componente do teclado da calculadora
export default function Teclado() {

    return(

        // View para o teclado
        <View style={estilos.containerTeclado}>

            {/* Teclado em si */}
            <View style={estilos.teclado}>
                
                {/* Botões do teclado */}
                <TouchableOpacity style={estilos.botao}>

                    <Text>C</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>Raiz</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>apagar</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>/</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>7</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>8</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>9</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>X</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>4</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>5</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>6</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>-</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>1</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>2</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>3</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>+</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.zero}>

                    <Text>0</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>.</Text>

                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao}>

                    <Text>=</Text>

                </TouchableOpacity>
            </View>

        </View>

    );

}