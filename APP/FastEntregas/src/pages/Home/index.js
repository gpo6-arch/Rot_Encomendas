import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

import styles from './styles';

export default function HomeScreen({ navigation }) {
    const navigateToClients = () => {
        navigation.navigate('ClientList'); 
    };
    
    const navigateToOrders = () => {
        navigation.navigate('OrderList'); 
    };
    
    const navigateToDrivers = () => {
        navigation.navigate('DriverList'); 
    };
    
    const navigateToRoutes = () => {
        alert('Funcionalidade de Rotas em desenvolvimento!'); 
    };


    return (
        <View style={styles.container}>
            <StatusBar style='dark'/>

            <View style={styles.body}>
                {/* 🚨 Aviso: Certifique-se de que o arquivo 'fastentregas_logo.png' 
                    existe no caminho '../assets/fastentregas_logo.png' 
                    relativo ao arquivo Home/index.js */}
                <Image 
                    source={require('../../../images/fastentregas_logo.png')} 
                    style={{width: 250, height: 250}} 
                />
                
                <Text style={styles.title}>
                    Seja Bem-Vindo!
                </Text>
                <Text style={styles.subTitle}>
                    O que deseja fazer hoje?
                </Text>
                
                {/* BOTÃO MOTORISTAS */}
                <TouchableOpacity style={styles.btn} onPress={navigateToDrivers}>
                    <FontAwesome5 name="truck" size={28} color="white" />
                    <Text style={styles.btnText}> Ver Motoristas </Text>
                </TouchableOpacity>
                
                {/* BOTÃO CLIENTES */}
                <TouchableOpacity style={styles.btn} onPress={navigateToClients}>
                    <FontAwesome6 name="user-group" size={28} color="white" />
                    <Text style={styles.btnText}> Ver Clientes </Text>
                </TouchableOpacity>
                
                {/* BOTÃO PEDIDOS */}
                <TouchableOpacity style={styles.btn} onPress={navigateToOrders}>
                    <SimpleLineIcons name="present" size={28} color="white" />
                    <Text style={styles.btnText}> Ver Pedidos </Text>
                </TouchableOpacity>
                
                {/* BOTÃO ROTAS (Placeholder) */}
                <TouchableOpacity style={styles.btn} onPress={navigateToRoutes}>
                    <Feather name="map" size={28} color="white" />
                    <Text style={styles.btnText}> Ver Rotas </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}