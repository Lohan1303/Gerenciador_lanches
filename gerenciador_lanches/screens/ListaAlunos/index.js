import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho está correto
import api from '../../service/api';
import * as Utils from '../../utils/utils';

export default function ListaAluno({ route, navigation }) {
  const [lista, setLista] = useState([]);
  const [load, setLoad] = useState(false);

  // Recarregar a lista quando a navegação de volta for realizada
  useEffect(() => {
    if (route.params?.flagReloadList) {
      console.log('Carregando lista devido retorno da tela de cadastro.');
      carregaLista();
    }
  }, [route.params?.flagReloadList]);

  // Função para carregar a lista de alunos
  async function carregaLista() {
    try {
      setLoad(true);
      let resposta = await api.get('/aluno/filter/getAll'); // Ajuste o endpoint da API conforme necessário
      await Utils.sleep(3000); // Para dar tempo de ver o efeito de loading
      setLista(resposta.data);
      setLoad(false);
    } catch (e) {
      Alert.alert('Erro', e.toString());
      setLoad(false);
    }
  }

  useEffect(() => {
    console.log('executando useEffect da listagem');
    carregaLista();
  }, []);

  // Função para navegar até a tela de cadastro com 'inclusao' como true
  function novoRegistro() {
    navigation.navigate('CadastroAluno', {
      inclusao: true,
    });
  }

  // Função para navegar até a tela de cadastro para editar
  function editaRegistro(aluno) {
    navigation.navigate('CadastroAluno', {
      inclusao: false,
      aluno,
    });
  }

  // Função para exibir o alerta de confirmação de remoção
  function removerElemento(id) {
    Alert.alert('Atenção', 'Confirma a remoção do aluno?', [
      {
        text: 'Sim',
        onPress: () => efetivaRemocao(id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  // Função para efetivar a remoção do aluno
  async function efetivaRemocao(id) {
    try {
      await api.delete('/Aluno/' + id); // Ajuste o endpoint conforme necessário
      await carregaLista();
    } catch (e) {
      Alert.alert('Erro', e.toString());
    }
  }

  // Função de renderização dos itens da lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>ID: {item.id}</Text>
      <Text style={styles.itemText}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>RA: {item.ra}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => editaRegistro(item)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removerElemento(item.id)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Alunos</Text>

      {/* Indicador de Carregamento */}
      {load ? (
        <ActivityIndicator size="large" color="#00ff00" style={styles.waiting} />
      ) : (
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {/* Botão Adicionar Novo Aluno */}
      <TouchableOpacity style={styles.addButton} onPress={novoRegistro}>
        <Text style={styles.addButtonText}>Adicionar Novo Aluno</Text>
      </TouchableOpacity>

      {/* Espaçamento entre os botões */}
      <View style={styles.spacing} />

      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.voltarButton}
        onPress={() => navigation.goBack()} // Navega para a tela anterior
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
