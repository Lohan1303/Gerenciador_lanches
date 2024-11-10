import React, { useEffect } from 'react'; // Corrigido: importação do React e useEffect
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Apresentacao = ({ navigation }) => { 

  useEffect(() => {
    console.log("Tela de apresentação");
  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App!</Text>
      <Text style={styles.subtitle}>Esta é uma apresentação simples do seu aplicativo.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaAlunos')}>
        <Text style={styles.buttonText}>Lista de Alunos</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroAutorizacao')}>
        <Text style={styles.buttonText}>Cadastrar Autorização de Lanche</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConsultaAutorizacao')}>
        <Text style={styles.buttonText}>Consultar Autorizações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Apresentacao;
