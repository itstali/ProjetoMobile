import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CadastroScreen from './screens/Cadastrar';
import ListagemScreen from './screens/Lista';





const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Cadastro" component={CadastroScreen} />
<Stack.Screen name="Lista" component={ListagemScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;