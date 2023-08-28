import React from "react";
import {View, Text, Button } from 'react-native';

function TelaMedida( { navigation } ){
    return(
        <View>
            <Text>Tela de detalhes</Text>
            <Button title='Calculadora' onPress={() => navigation.navigate('Calculadora') } />
            <Button title='Temperatura' onPress={() => navigation.navigate('Temperatura') } />
        </View>
    );
}

export default TelaMedida;