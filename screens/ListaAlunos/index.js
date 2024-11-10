import {
    Alert,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    ActivityIndicator,
  } from 'react-native';
  import { useState, useEffect } from 'react';
  import styles from './styles';
  import api from '../../service/api';
  import * as Utils from '../../utils/utils';
  
  export default function ListaAluno({ route, navigation }) {
    const [lista, setLista] = useState([]);
    const [load, setLoad] = useState(false);
  
    useEffect(() => {
      if (route.params?.flagReloadList) {
        console.log('Carregando lista devido retorno da tela de cadastro.');
        carregaLista();
      }
    }, [route.params?.flagReloadList]);
  
    async function carregaLista() {
      try {
        setLoad(true);
        let resposta = await api.get('/aluno/filter/getAll');
        await Utils.sleep(3000); // para dar tempo de ver o efeito de loading...
        setLista(resposta.data);
        setLoad(false);
      } catch (e) {
        Alert.alert(e.toString());
        setLoad(false);
      }
    }
  
    useEffect(() => {
      console.log('executando useEffect da listagem');
      carregaLista();
    }, []);
  
    function novoRegistro() {
      navigation.navigate('CadastroAluno', {
        inclusao: true,
      });
    }
  
    function editaRegistro(aluno) {
      navigation.navigate('CadastroAluno', {
        inclusao: false,
        aluno,
      });
    }
  
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
  
    async function efetivaRemocao(id) {
      try {
        await api.delete('/Aluno/' + id);
        await carregaLista();
      } catch (e) {
        Alert.alert(e.toString());
      }
    }
  
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
        <TouchableOpacity style={styles.addButton} onPress={novoRegistro}>
          <Text style={styles.addButtonText}>Adicionar Novo Aluno</Text>
        </TouchableOpacity>
      </View>
    );
  }
  