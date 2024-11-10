import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apresentacao from './screens/Apresentacao';
import ListaAlunos from './screens/ListaAlunos';
import CadastroAluno from './screens/CadastroAluno';


const telas = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <telas.Navigator initialRouteName="Apresentacao">
        <telas.Screen name="Apresentacao" component={Apresentacao} options={{ headerShown: false, title: '', animation: 'fade' }} />
        <telas.Screen name="ListaAlunos" component={ListaAlunos} options={{ headerShown: false, title: '', animation: 'fade' }} />
        <telas.Screen name="CadastroAluno" component={CadastroAluno} options={{ headerShown: false, title: '', animation: 'fade' }} />
      </telas.Navigator>
    </NavigationContainer>
  );
}

