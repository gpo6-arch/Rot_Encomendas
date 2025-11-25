import { View, Text, TouchableOpacity, SafeAreaViewBase, Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
 return (
   <View style={styles.container}>
    <StatusBar style='dark'/>

    {/* Corpo */}

    <View style={styles.body}>
        <Image 
        source={require('../../images/logo.jpg')}
        style={{width: 200, height: 200}}
        />
        <Text style={styles.title}>
            Seja Bem-Vindo!
        </Text>
        <Text style={styles.subTitle}>
            O que deseja fazer hoje?
        </Text>
        <TouchableOpacity style={styles.btn}>
            <FontAwesome5 name="truck" size={28} color="white" />
            <Text style={styles.btnText}> Ver Motoristas </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <FontAwesome6 name="user-group" size={28} color="white" />
            <Text style={styles.btnText}> Ver Clientes </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <SimpleLineIcons name="present" size={28} color="white" />
            <Text style={styles.btnText}> Ver Pedidos </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
            <Feather name="map" size={28} color="white" />
            <Text style={styles.btnText}> Ver Rotas </Text>
        </TouchableOpacity>
    </View>
   </View>
  );
}