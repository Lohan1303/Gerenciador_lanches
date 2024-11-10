import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, ActivityIndicator, TextInput } from 'react-native';
import api from '../../service/api'; // Sua API para interagir com o backend
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ConsultaAutorizacao({ navigation }) {
  const [dataConsulta, setDataConsulta] = useState(new Date()); // Data para consulta
  const [autorizacoes, setAutorizacoes] = useState([]); // Lista de alunos com as autorizações
  const [loading, setLoading] = useState(false); // Controle de loading
  const [showDatePicker, setShowDatePicker] = useState(false); // Controle para mostrar o picker de data

  // Função para carregar autorizações com base na data
  async function carregaAutorizacoes() {
    const dataFormatada = dataConsulta.toISOString().split('T')[0]; // Formata a data para o formato AAAA-MM-DD
    if (!dataConsulta) {
      Alert.alert('Erro', 'Por favor, insira uma data para consulta.');
      return;
    }

    try {
      setLoading(true);
      const resposta = await api.get(`/autorizacao-lanche?data=${dataFormatada}`); // Endpoint para consulta de autorizações
      setAutorizacoes(resposta.data); // Carrega os alunos e lanches
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível carregar as autorizações.');
    } finally {
      setLoading(false);
    }
  }

  // Função para atualizar a quantidade de lanches de um aluno
  async function atualizarQtdeLanches(alunoId, qtde) {
    if (qtde < 0 || qtde > 3) {
      Alert.alert('Erro', 'A quantidade de lanches deve ser entre 0 e 3.');
      return;
    }

    try {
      await api.put(`/autorizacao-lanche/${alunoId}`, { qtdeLanches: qtde });
      Alert.alert('Sucesso', 'Quantidade de lanches atualizada!');
      carregaAutorizacoes(); // Atualiza a lista
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível atualizar a quantidade de lanches.');
    }
  }

  // Função para atualizar o valor da quantidade de lanches no estado local
  const handleQuantidadeChange = (id, value) => {
    const newAutorizacoes = autorizacoes.map((item) => {
      if (item.id === id) {
        return { ...item, qtdeLanches: value };
      }
      return item;
    });
    setAutorizacoes(newAutorizacoes);
  };

  // Renderiza cada item da lista de alunos
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nome: {item.aluno.nome}</Text>
      <Text style={styles.itemText}>RA: {item.aluno.ra}</Text>
      <Text style={styles.itemText}>Lanches Restantes:</Text>

      <TextInput
        style={styles.input}
        value={String(item.qtdeLanches)}
        onChangeText={(text) => handleQuantidadeChange(item.id, parseInt(text))}
        keyboardType="numeric"
        maxLength={1}
      />

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => atualizarQtdeLanches(item.id, item.qtdeLanches)}
      >
        <Text style={styles.updateButtonText}>Atualizar Lanches</Text>
      </TouchableOpacity>
    </View>
  );

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataConsulta;
    setShowDatePicker(false);
    setDataConsulta(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.consultaDataText}>Consulta por Data</Text>

      {/* Exibe o botão para abrir o seletor de data */}
      <TouchableOpacity style={styles.datePickerButton} onPress={showDatepicker}>
        <Text style={styles.datePickerText}>Escolher Data</Text>
      </TouchableOpacity>

      {/* Exibe a data formatada */}
      <Text style={styles.dataSelecionadaText}>Data Selecionada: {dataConsulta.toISOString().split('T')[0]}</Text>

      {/* Mostra o DateTimePicker se o estado showDatePicker for true */}
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dataConsulta}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {/* Botão de consulta */}
      <TouchableOpacity style={styles.button} onPress={carregaAutorizacoes}>
        <Text style={styles.buttonText}>Consultar Autorizações</Text>
      </TouchableOpacity>

      {/* Exibe o indicador de carregamento */}
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" style={styles.waiting} />
      ) : (
        <FlatList
          data={autorizacoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}
