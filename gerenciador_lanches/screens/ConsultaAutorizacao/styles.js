import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',  // Cor de fundo suave
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D2D2D',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#7D7D7D',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,  // Sombra leve para o botão
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
    fontSize: 18,
    color: '#333',
    shadowColor: '#000',  // Sombra sutil para o input
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  listContainer: {
    flexGrow: 1,
    width: '100%',
    paddingVertical: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    shadowColor: '#000',  // Sombra para os itens
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  itemText: {
    fontSize: 18,
    color: '#2D2D2D',
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,  // Sombra para o botão de atualização
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  waiting: {
    marginTop: 25,
  },
  datePickerButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 8,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,  // Leve sombra
  },
  datePickerText: {
    fontSize: 18,
    color: '#4CAF50',  // Cor verde para o texto do botão de data
  },
  consultaDataText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2D2D2D',
    marginTop: 20,
    marginBottom: 10,
  },
  dataSelecionadaText: {
    fontSize: 20,
    color: '#7D7D7D',
    marginTop: 10,
    marginBottom: 20,
  },
});
