import React, { useState } from 'react'; 
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderSchema } from '../../validation/orderSchema'; 
import { MaterialIcons } from '@expo/vector-icons'; 

import CustomInput from '../../components/CustomInput';

export default function OrderFormScreen({ navigation, route }) {
  const { orderId } = route.params || {};
  const isEditing = !!orderId;

  const [isSaving, setIsSaving] = useState(false); 

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: { 
      nomeCliente: isEditing ? 'Isabella M. Barbosa' : '',
      descricaoProduto: isEditing ? 'Airfryer' : '',
      telefone: '',
      porteProduto: '',
      codigoPostal: '',
      endereco: '',
      numero: '',
      cidade: '',
      estado: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSaving(true);

    await new Promise(resolve => setTimeout(resolve, 1500)); 
    
    setIsSaving(false);

    const action = isEditing ? 'atualizado' : 'criado';
    Alert.alert('Simulação de Sucesso', `Pedido ${action} com os seguintes dados:\n${JSON.stringify(data, null, 2)}`);
    
    navigation.goBack(); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{isEditing ? 'Editar Pedido' : 'Cadastro Pedido'}</Text>
        <View style={{ width: 24 }} /> 
      </View>
      
      <View style={styles.formContainer}>
        {/* CAMPOS DO FORMULÁRIO */}
        <CustomInput control={control} name="nomeCliente" label="Nome do cliente" />
        <CustomInput control={control} name="descricaoProduto" label="Descrição do produto" />
        <CustomInput control={control} name="telefone" label="Telefone" keyboardType="phone-pad" />
        <CustomInput control={control} name="porteProduto" label="Porte do produto" /> 
        <CustomInput control={control} name="codigoPostal" label="Código Postal" keyboardType="numeric" />
        
        {/* Linha Dupla: Endereço e Número */}
        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <CustomInput control={control} name="endereco" label="Endereço" />
          </View>
          <View style={styles.quarterWidth}>
            <CustomInput control={control} name="numero" label="Número" keyboardType="numeric" />
          </View>
        </View>

        <CustomInput control={control} name="cidade" label="Cidade" />
        <CustomInput control={control} name="estado" label="Estado" />

        {/* Botões */}
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSubmit(onSubmit)} 
          disabled={isSaving} 
        >
          {isSaving ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={styles.buttonText}>Salvar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#60B0E0', 
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    flex: 0.65, 
    marginRight: 10,
  },
  quarterWidth: {
    flex: 0.35, 
  },
  saveButton: {
    backgroundColor: '#60B0E0', 
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#60B0E0',
  },
  cancelButtonText: {
    color: '#60B0E0',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
