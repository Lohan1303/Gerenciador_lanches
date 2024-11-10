import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apresentacao from './screens/Apresentacao';
import ListaAlunos from './screens/ListaAlunos';
import CadastroAutorizacao from './screens/CadastroAutorizacao';
import ConsultaAutorizacao from './screens/ConsultaAutorizacao';
import CadastroAluno from './screens/CadastroAluno';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Apresentacao">
        <Stack.Screen name="Apresentacao" component={Apresentacao} options={{ headerShown: false, title: '', animation: 'fade' }} />
        <Stack.Screen name="ListaAlunos" component={ListaAlunos} options={{ headerShown: false, title: '', animation: 'fade' }} />
        <Stack.Screen name="CadastroAutorizacao" component={CadastroAutorizacao} options={{ headerShown: false, title: '', animation: 'fade' }} />
        <Stack.Screen name="ConsultaAutorizacao" component={ConsultaAutorizacao} options={{ headerShown: false, title: '', animation: 'fade' }} />
        <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{ headerShown: false, title: '', animation: 'fade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
