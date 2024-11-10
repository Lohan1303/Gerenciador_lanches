// Exemplo de estilos em styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  areaScrollViewForm: {
    flex: 1,
  },
  labelCampoEdicao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  caixaTexto: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
  botaoCancela: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  areaBotoes: {
    marginTop: 20,
  },
  waiting: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default styles;
