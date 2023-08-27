import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import Display from '../Display/index';

// Componente do teclado da calculadora
export default function Calculadora() {
  const [expressao, setExpressao] = useState('');

  function concatenar(valor) {
    setExpressao(expressao + valor);
  }

  function apagar() {
    setExpressao('');
  }

  return (
    <View style={estilos.calculadora}>
      <Display expressao={expressao} />

      {/* View para o teclado */}
      <View style={estilos.teclado}>
        {/* Botões do teclado */}
        <TouchableOpacity
          onPress={() => apagar()}
          style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('/')}
          style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>:</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('7')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('8')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('9')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('*')}
          style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('4')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('5')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('6')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('-')}
          style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('1')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('2')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('3')}
          style={[estilos.botao, estilos.numero]}>
          <Text style={estilos.texto}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('+')}
          style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => concatenar('0')} style={estilos.zero}>
          <Text style={estilos.texto}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}