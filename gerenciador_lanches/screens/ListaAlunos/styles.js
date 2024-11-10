// Exemplo de estilos
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  voltarButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    marginTop: 20, // Espaçamento do botão "Voltar"
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  spacing: {
    marginTop: 15, // Adicionando espaçamento entre os dois botões
  },
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 0.48,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    flex: 0.48,
    alignItems: 'center',
  },
  waiting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
