import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#00adb5',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: '90%',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 20,
    },
    loadingText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16,
        color: '#333',
    },
});

export default styles;
