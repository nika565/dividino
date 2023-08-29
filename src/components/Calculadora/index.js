import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { estilos } from './estilos';
import Display from '../Display/index';
import { LinearGradient } from 'expo-linear-gradient';

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

  // Apaggar um único elemento
  function apagar() {
    setExpressao(expressao.slice(0, -1));
  }

  function verificaOperadoresIguais(expressao) {
  const regex = /([+\-*/])\1/;
  return !regex.test(expressao);
}

  // Função para calcular
  function calcular(expressao) {

    // Verificando se a expressão termina com algum símbolo ou não está definida
    if (/[+\/*-.]/.test(expressao.slice(-1)) || typeof (expressao) === 'undefined' || expressao === '') {
      setExpressao('');
      setResultado('Inválido...');
      return;
    } else if (!verificaOperadoresIguais(expressao)) {
      setExpressao('');
      setResultado('Inválido...');
      return;
    }

    // Caso ocorra divisão por zero
    if (eval(expressao) == 'Infinity') {
      setResultado('Operação indisponível');
      setExpressao('');
    } else {
      setResultado(eval(expressao));
      setExpressao('');
    }

  }

  // Função dedicada a fazer raiz quadrada
  function raizQuadrada(numero) {

    // Verificando se a expressão termina com algum símbolo ou não está definida
    if (/[+\/*-.]/.test(expressao.slice(-1)) || typeof (expressao) === 'undefined' || expressao === '') {
      setExpressao('');
      setResultado('Inválido...');
      return;
    } else {

      // Possível operação
      const operacao = Number(eval(numero))
      setExpressao('');
      setResultado(Math.sqrt(operacao));

    }

  }

  return (
    <View style={estilos.calculadora}>
      <Display expressao={expressao} resultado={resultado} />

      {/* View para o teclado */}
      <View style={estilos.teclado}>
        {/* Botões do teclado */}
        <TouchableOpacity
          onPress={() => apagarTudo()}
          style={estilos.botao}>
            <LinearGradient colors={['#AD5E00', '#8A1A35']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Image source={require('../../../assets/icon/meteoro.png')} style={estilos.iconeBotao} />
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => raizQuadrada(expressao)} style={estilos.botao}>
          <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
            <Text style={estilos.texto}>√</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => apagar()} style={estilos.botao}>
            <LinearGradient colors={['#8A6300', '#593335']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Image source={require('../../../assets/icon/fossil.png')} style={estilos.iconeBotao} />
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('/')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>:</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('7')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>7</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('8')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>8</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('9')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>9</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('*')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>x</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('4')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>4</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('5')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>5</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('6')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>6</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('-')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>-</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('1')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>1</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('2')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>2</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('3')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>3</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => concatenar('+')}
          style={estilos.botao}>
            <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>+</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => concatenar('0')} style={estilos.zero}>
          <LinearGradient colors={['#614387', '#A290BC']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>0</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => concatenar('.')} style={estilos.botao}>
            <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>,</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => calcular(expressao)} style={estilos.botao}>
            <LinearGradient colors={['#614387', '#646494']} start={{ x: 1, y: 0 }} style={estilos.gradiente}>
              <Text style={estilos.texto}>=</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
