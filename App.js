import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/auth/login';
import Signup from './app/auth/signup';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from './app/index';
import ColorPicker from './app/colorPicker';
import EditBtnList from './app/edit';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './config/firebase';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import store from './store';
import { login } from './store/auth';
import Edit from './app/dashboard/profile/edit';
import Profile from './app/dashboard/profile';
const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  console.log('====================================');
  console.log('====================================');
  useEffect(() => {
      onAuthStateChanged(FIREBASE_AUTH, (snap) => {
        setUser(snap);
        console.log('====================================');
        console.log("User: ", snap);
        console.log('====================================');
      });
  }, [ FIREBASE_AUTH])

  
  return (
    <Provider store={store}>
      <AppRaw user={user} />
    </Provider>
  );
}

const AppRaw = ({user}) => {
  return(
<NavigationContainer>
        <Stack.Navigator initialRouteName={ !user? "Dashboard" :"Login"}>
        {/* <Stack.Navigator initialRouteName={"EditProfile"}> */}
        <Stack.Screen name="Login" options={{
          header: () => null,
        }} component={Login} />
        <Stack.Screen
          name="Dashboard"
          options={{
            header: () => null,
          }}
          component={AppStack}
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
        <Stack.Screen
          name="EditProfile"
          navigationKey='EditProfile'
          component={Edit}
        />
        <Stack.Screen
          name="Profile"
          navigationKey='Profile'
          component={Profile}
        />
        </Stack.Navigator>
      </NavigationContainer>
  )
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