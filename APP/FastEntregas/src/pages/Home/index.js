import { View, Text, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
 return (
   <View style={styles.container}>
    <StatusBar style='dark'/>
    {/* Cabeçalho */}
    <View>
        <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
    </View>
   </View>
  );
}