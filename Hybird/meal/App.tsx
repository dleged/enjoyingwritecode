import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import TodoList from './src/pages/todolist';


const Stack = createStackNavigator();

function HomesCreen(){
  return <View>
    <Text>hello react native app!</Text>
  </View>
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomesCreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;