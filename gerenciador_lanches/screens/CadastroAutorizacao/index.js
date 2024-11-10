import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../service/api'; // Ajuste o caminho da sua API
import styles from './styles';

const SelecionarData = ({ navigation }) => {  // Adicionando o 'navigation' como prop

  const [date, setDate] = useState(new Date()); // Data inicial
  const [show, setShow] = useState(false); // Controle do modal de data
  const [alunos, setAlunos] = useState([]); // Lista de alunos
  const [selectedAlunos, setSelectedAlunos] = useState([]); // Alunos selecionados
  const [loading, setLoading] = useState(false); // Controle de carregamento

  // Função para carregar a lista de alunos
  async function carregarAlunos() {
    setLoading(true);
    try {
      const response = await api.get('/aluno/filter/getAll'); // Ajuste a URL da sua API
      setAlunos(response.data); // Atualiza a lista de alunos
    } catch (erro) {
      console.error('Erro ao carregar alunos:', erro);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarAlunos(); // Carrega os alunos ao carregar a tela
  }, []);

  // Função para exibir o seletor de data
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate); // Atualiza a data selecionada
  };

  const showDatepicker = () => {
    setShow(true); // Exibe o DateTimePicker
  };

  // Função para marcar ou desmarcar um aluno
  const handleSelectAluno = (id) => {
    setSelectedAlunos((prevState) =>
      prevState.includes(id)
        ? prevState.filter((item) => item !== id)
        : [...prevState, id]
    );
  };

  // Função para conceder a permissão de lanche
  const concederPermissao = async () => {
    try {
      await api.post('/permissao-lanche', { alunos: selectedAlunos, data: date });
      alert('Permissões de lanche concedidas com sucesso!');
    } catch (erro) {
      console.error('Erro ao conceder permissões:', erro);
      alert('Erro ao conceder permissões.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* Checkbox à esquerda */}
      <TouchableOpacity
        style={[styles.checkbox, selectedAlunos.includes(item.id) && styles.checkboxChecked]}
        onPress={() => handleSelectAluno(item.id)}
      >
        <Text style={styles.checkboxText}>
          {selectedAlunos.includes(item.id) ? '✔' : ''}
        </Text>
      </TouchableOpacity>
  
      {/* Nome e RA à direita do checkbox */}
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.nome}</Text>
        <Text style={styles.raText}>RA: {item.ra}</Text>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma Data</Text>



      {/* Botão para abrir o DateTimePicker */}
      <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
        <Text style={styles.buttonText}>Escolher Data</Text>
      </TouchableOpacity>

      {/* Exibe a data formatada */}
      <Text style={styles.selectedDate}>Data Selecionada: {date.toISOString().split('T')[0]}</Text>

      {/* Exibe o DateTimePicker se show for true */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      {/* Indicador de Carregamento */}
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" style={styles.waiting} />
      ) : (
        <FlatList
          data={alunos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {/* Botão para conceder permissões */}
      <TouchableOpacity style={styles.submitButton} onPress={concederPermissao}>
        <Text style={styles.buttonText}>Conceder Permissões de Lanche</Text>
      </TouchableOpacity>

            {/* Botão de Voltar */}
            <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}  // Função para voltar
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelecionarData;
