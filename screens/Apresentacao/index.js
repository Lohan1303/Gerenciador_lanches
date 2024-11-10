// screens/apresentacao/index.js
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
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity> 
     
    </View>
  );
};

export default Apresentacao;
