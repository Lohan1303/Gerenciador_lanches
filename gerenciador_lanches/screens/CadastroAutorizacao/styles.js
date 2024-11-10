import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  dateSection: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adiciona sombra no Android
  },
  dateButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedDate: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
  waiting: {
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15, // Mais espaço entre os itens
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra no Android
  },
  textContainer: {
    flex: 1, // Ocupa o restante do espaço disponível
    marginLeft: 15, // Espaço entre o checkbox e o texto
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  raText: {
    fontSize: 14,
    color: '#777',
  },
  checkbox: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50', // Cor de fundo quando marcado
  },
  checkboxText: {
    fontSize: 20, // Ícone maior para o check
    color: '#fff',
  },
  submitButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 20,
  },
  listFooter: {
    padding: 15,
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#f44336', // Cor vermelha para destacar
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  
});
