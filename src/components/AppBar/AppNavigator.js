import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCalculadora from '../../Pages/TelaCalculadora';
import TelaTemperatura from '../../Pages/TelaTemperatura';
import TelaMedida from '../../Pages/TelaMedida';

const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <Stack.Navigator >
            <Stack.Screen name='Calculadora' component={ TelaCalculadora } options={{
                                                                            title: '',
                                                                            headerStyle: {
                                                                                backgroundColor: 'rgb(255, 255, 255,0)',
                                                                                height: 25,
                                                                            }}}
            />
            <Stack.Screen name='Temperatura' component={ TelaTemperatura } options={{
                                                                            title: '',
                                                                            headerStyle: {
                                                                                backgroundColor: 'rgb(255, 255, 255,0)',
                                                                                height: 25,
                                                                            }}}
            />
            <Stack.Screen name='Medida' component={ TelaMedida } />
        </Stack.Navigator>
    );
}


export default AppNavigator;
