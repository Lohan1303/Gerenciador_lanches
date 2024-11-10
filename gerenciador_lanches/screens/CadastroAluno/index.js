import {
    Alert, Text, TextInput, TouchableOpacity, View, ScrollView,
    ActivityIndicator
  } from 'react-native';
  import { useState, useEffect } from 'react';
  import styles from './styles';
  import api from '../../service/api';
  import * as Utils from '../../utils/utils';
  
  export default function CadastroAluno({ route, navigation }) {
    const { inclusao = false, aluno = null } = route.params || {};
  
    const [id, setId] = useState(aluno?.id?.toString() || '');
    const [ra, setRa] = useState(aluno?.ra || '');
    const [nome, setNome] = useState(aluno?.nome || '');
    const [foto, setFoto] = useState(aluno?.foto || '');
    const [load, setLoad] = useState(false);
  
    useEffect(() => {
      console.log('processando useEffect');
      if (inclusao) {
        carregaProximoId();
      }
    }, []);
  
    async function carregaProximoId() {
      try {
        const resposta = await api.get('/aluno/filter/getNextId');
        console.log('Próximo ID:', resposta.data);
        Utils.sleep(1000);  // Efeito de loading
        setId(resposta.data.toString());
      } catch (e) {
        Alert.alert('Erro ao obter próximo ID:', e.toString());
      }
    }
  
    async function salva() {
      try {
        const objAluno = {
          id,
          ra,
          nome,
          foto,
        };
    
        console.log('Attempting to save object:', objAluno);
    
        let resposta;
        if (inclusao) {
          resposta = await api.post('/Aluno', objAluno);
          console.log('Response from API on create:', resposta.data);
        } else {
          resposta = await api.put(`/Aluno/${id}`, objAluno);
          console.log('Response from API on update:', resposta.data);
        }
    
        if (resposta.status === 200 || resposta.status === 201) {
          Alert.alert('Success', 'Student saved successfully!');
        } else {
          Alert.alert('Warning', 'Could not confirm the save operation.');
        }
    
        navigation.navigate('ListaAlunos', { flagReloadList: Utils.random() });
      } catch (erro) {
        trataErroAPI(erro);
      }
    }
    
  
    function trataErroAPI(error) {
      if (error.response && error.response.data && error.response.data.erro) {
        Alert.alert(error.response.data.erro);
      } else {
        Alert.alert(error.toString());
      }
    }
  
    return (
      <View style={styles.container}>
        {load ? (
          <ActivityIndicator size="large" color="#00ff00" style={styles.waiting} />
        ) : (
          <ScrollView style={styles.areaScrollViewForm}>
            <Text style={styles.labelCampoEdicao}>ID</Text>
            <TextInput
              style={styles.caixaTexto}
              keyboardType={'number-pad'}
              onChangeText={setId}
              value={id}
              editable={inclusao}
            />
  
            <Text style={styles.labelCampoEdicao}>RA</Text>
            <TextInput
              style={styles.caixaTexto}
              onChangeText={setRa}
              value={ra}
            />
  
            <Text style={styles.labelCampoEdicao}>Nome</Text>
            <TextInput
              style={styles.caixaTexto}
              onChangeText={setNome}
              value={nome}
            />
  
            <Text style={styles.labelCampoEdicao}>Foto (URL)</Text>
            <TextInput
              style={styles.caixaTexto}
              onChangeText={setFoto}
              value={foto}
            />
  
            <View style={styles.areaBotoes}>
              <TouchableOpacity
                style={styles.botaoCancela}
                onPress={() => navigation.navigate('ListaAlunos')}
              >
                <Text style={styles.textoBotao}>Cancelar</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.botao} onPress={salva}>
                <Text style={styles.textoBotao}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
  