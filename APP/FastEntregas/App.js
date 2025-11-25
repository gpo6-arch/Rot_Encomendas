import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "./src/pages/Home/index";
import CriarCliente from "./src/pages/CriarCliente/index";
import CriarMotorista from "./src/pages/CriarMotorista/index";
import CriarPedido from "./src/pages/CriarPedido/index";
import Mapa from "./src/pages/Mapa/index";
import Rotas from "./src/pages/Rotas/index";
import ListarCliente from "./src/pages/ListarCliente/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CriarCliente" component={CriarCliente} />
        <Stack.Screen name="CriarMotorista" component={CriarMotorista} />
        <Stack.Screen name="CriarPedido" component={CriarPedido} />
        <Stack.Screen name="Rotas" component={Rotas} />
        <Stack.Screen name="ListarCliente" component={ListarCliente} />
        <Stack.Screen name="ListarMotorista" component={ListarMotorista} />
        <Stack.Screen name="ListarPedidos" component={ListarPedidos} />
       
        <Stack.Screen name="Mapa" component={Mapa} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
//