import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import HomeScreen from './src/pages/Home/index';
import ClientListScreen from './src/pages/ListarCliente/index'; 
import ClientFormScreen from './src/pages/CriarCliente/index';   
import OrderListScreen from './src/pages/ListarPedidos/index';    
import OrderFormScreen from './src/pages/CriarPedido/index';    
import DriverListScreen from './src/pages/ListarMotorista/index'; 
import DriverFormScreen from './src/pages/CriarMotorista/index';
import Mapa from "./src/pages/Mapa/index";
import AtribuirPedidosScreen from './src/pages/AtribuirPedidos/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#60B0E0" />
      <Stack.Navigator 
        screenOptions={{ headerShown: false }} 
        initialRouteName="Home" 
      >

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="ClientList" component={ClientListScreen} />
        <Stack.Screen name="ClientForm" component={ClientFormScreen} />

        <Stack.Screen name="OrderList" component={OrderListScreen} />
        <Stack.Screen name="OrderForm" component={OrderFormScreen} />

        <Stack.Screen name="DriverList" component={DriverListScreen} /> 
        <Stack.Screen name="DriverForm" component={DriverFormScreen} />

        <Stack.Screen name="AtribuirPedidos" component={AtribuirPedidosScreen} />
        <Stack.Screen name="Mapa" component={Mapa} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
