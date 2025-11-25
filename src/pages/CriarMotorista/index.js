// src/pages/CriarMotorista/index.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DriverFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Cadastro de Motorista (Em desenvolvimento)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});