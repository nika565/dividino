import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import Display from '../Display/index';

// Componente do teclado da calculadora
export default function Calculadora() {

  // Manipulando o estado da expressão conforme a digitação do usuário
  const [expressao, setExpressao] = useState('');

  // Manipulando o resultado a ser exibido na tela
  const [resultado, setResultado] = useState('');

  // Função para concatenar a expressão digitada pelo usuário
  function concatenar(valor) {
    
    // Construindo a expressão 
    setExpressao(expressao + valor);

    // Limpando o resultado
    setResultado('');
  }

  // Função para apagar completamente a minha expressão
  function apagarTudo() {
    setExpressao('');
    setResultado('');
  }

  // Pagar elemento por elemento
  function apagar() {
    setExpressao(expressao.slice(0, -1));
  }

  // Função para calcular
  function calcular(expressao) {

    // Verificando se possuí valor indefinido ou vazio
    if (typeof(expressao) === 'undefined' || expressao == '') expressao = '0'

    // Caso 
    if (eval(expressao) == 'Infinity') {
      setResultado('Operação indisponível');
      setExpressao('');
    } else {
      setResultado(eval(expressao));
      setExpressao('');
    }
  }

  function raizQuadrada(numero) {

    // Verificando se possuí valor indefinido ou vazio
    if (typeof(numero) === 'undefined' || numero == '') numero = '0'

    // Possível operação
    const operacao = Number(eval(numero))

    setExpressao('');
    setResultado(Math.sqrt(operacao));

  }

  return (
    <View style={estilos.calculadora}>
      <Display expressao={expressao} resultado={resultado} />

      {/* View para o teclado */}
      <View style={estilos.teclado}>
        {/* Botões do teclado */}
        <TouchableOpacity
          onPress={() => apagarTudo()}
          style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => raizQuadrada(expressao)} style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => apagar()} style={[estilos.botao, estilos.sinal]}>
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

        <TouchableOpacity onPress={() => concatenar('.')} style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>,</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => calcular(expressao)} style={[estilos.botao, estilos.sinal]}>
          <Text style={estilos.texto}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
