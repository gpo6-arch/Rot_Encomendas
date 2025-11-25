// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

// ⚠️ ATENÇÃO: Verifique e ajuste estes caminhos se a sua estrutura for diferente!
// Baseado na sua estrutura: src/pages/CriarCliente, src/pages/CriarPedido, etc.

// Telas de Cliente
import ClientListScreen from './src/pages/ListarCliente/index'; // Assumindo que você usa 'ListarClientes' para a lista
import ClientFormScreen from './src/pages/CriarCliente/index';   // Tela de Cadastro/Edição de Cliente

// Telas de Pedido
import OrderListScreen from './src/pages/ListarPedidos/index';    // Tela de Lista de Pedidos
import OrderFormScreen from './src/pages/CriarPedido/index';     // Tela de Cadastro/Edição de Pedido

// Telas de Motorista (Ainda não criadas, mas incluídas na rota)
import DriverFormScreen from './src/pages/CriarMotorista/index'; // A ser criada
// import DriverListScreen from './src/pages/ListarMotoristas/index'; // Se houver lista de motoristas

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#60B0E0" />
      <Stack.Navigator 
        // Desabilita o cabeçalho padrão para usar os cabeçalhos personalizados em cada tela (azuis)
        screenOptions={{ headerShown: false }} 
        // 🚨 Define a tela inicial. Mude para 'OrderList' ou 'Home' conforme necessário.
        initialRouteName="ClientList" 
      >
        {/* Rota Clientes */}
        <Stack.Screen name="ClientList" component={ClientListScreen} />
        <Stack.Screen name="ClientForm" component={ClientFormScreen} />

        {/* Rota Pedidos */}
        <Stack.Screen name="OrderList" component={OrderListScreen} />
        <Stack.Screen name="OrderForm" component={OrderFormScreen} />
        
        {/* Rota Motoristas */}
        <Stack.Screen name="DriverForm" component={DriverFormScreen} />
        {/* <Stack.Screen name="DriverList" component={DriverListScreen} /> */}

        {/* Rota Home (Se você tiver uma tela inicial) */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;