import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/auth/login';
import Signup from './app/auth/signup';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from './app/dashboard';
import ColorPicker from './app/colorPicker';
import EditBtnList from './app/edit';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Login" options={{
        header: () => null,
      }} component={Login} /> */}
      <Stack.Screen
        name="Dashboard"
        options={{
          header: () => null,
        }}
        component={Dashboard}
      />
      <Stack.Screen
        name="ColorPicker"
        navigationKey='ColorPicker'
        component={ColorPicker}
      />
      <Stack.Screen
        name="EditButtonList"
        navigationKey='ColorPicker'
        component={EditBtnList}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;