// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import HomeScreen from './src/pages/Home/index';
import ClientListScreen from './src/pages/ListarCliente/index'; 
import ClientFormScreen from './src/pages/CriarCliente/index';   
import OrderListScreen from './src/pages/ListarPedidos/index';    
import OrderFormScreen from './src/pages/CriarPedido/index';    
import DriverListScreen from './src/pages/ListarMotoristas/index'; 
import DriverFormScreen from './src/pages/CriarMotorista/index';   

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#60B0E0" />
      <Stack.Navigator 
        screenOptions={{ headerShown: false }} 
        initialRouteName="Home" 
      >
        {/* Rota HOME (Ponto de partida) */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* Rota Clientes */}
        <Stack.Screen name="ClientList" component={ClientListScreen} />
        <Stack.Screen name="ClientForm" component={ClientFormScreen} />

        {/* Rota Pedidos */}
        <Stack.Screen name="OrderList" component={OrderListScreen} />
        <Stack.Screen name="OrderForm" component={OrderFormScreen} />
        
        {/* Rota Motoristas */}
        <Stack.Screen name="DriverList" component={DriverListScreen} /> 
        <Stack.Screen name="DriverForm" component={DriverFormScreen} />
        
        {/* Rota Rotas (Falta criar) */}
        {/* <Stack.Screen name="RouteScreen" component={RouteScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;