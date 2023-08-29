import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCalculadora from '../../Pages/TelaCalculadora/index';
import TelaTemperatura from '../../Pages/TelaTemperatura/index';
import TelaMedida from '../../Pages/TelaMedida/index';

const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <Stack.Navigator >
            <Stack.Screen name='Calculadora' component={ TelaCalculadora } options={{
                                                                            title: '',
                                                                            headerStyle: {
                                                                                backgroundColor: 'rgb(255, 255, 255,0)',
                                                                                height: 25,
                                                                            },
                                                                            headerShown: false,}}
            />
            <Stack.Screen name='Temperatura' component={ TelaTemperatura } options={{
                                                                            title: '',
                                                                            headerStyle: {
                                                                                backgroundColor: 'rgb(255, 255, 255,0)',
                                                                                height: 25,
                                                                            },
                                                                            headerShown: false,}}
            />
            <Stack.Screen name='Medida' component={ TelaMedida } options={{
                                                                    title: '',
                                                                    headerStyle: {
                                                                        backgroundColor: 'rgb(255, 255, 255,0)',
                                                                        height: 25,
                                                                    },
                                                                    headerShown: false,}}/>
        </Stack.Navigator>
    );
}


export default AppNavigator;
