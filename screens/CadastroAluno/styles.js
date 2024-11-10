import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    labelCampoEdicao: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    caixaTexto: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    areaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    botaoCancela: {
        backgroundColor: '#ff6b6b',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
    },
    botao: {
        backgroundColor: '#00adb5',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    waiting: {
        marginTop: 20,
    },
    areaScrollViewForm: {
        marginBottom: 20,
    },
});

export default styles;
