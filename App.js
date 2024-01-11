import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import Login from './app/auth/login';
import Signup from './app/auth/signup';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from './app/index';
import ColorPicker from './app/colorPicker';
import EditBtnList from './app/edit';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { atob } from 'react-native-quick-base64';
import { BleManager } from 'react-native-ble-plx';
import { useEffect, useRef, useState } from 'react';

const Stack = createNativeStackNavigator();

const bleManager = new BleManager();

const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
const CHARACTERISTIC_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';


function App() {

  
  const [deviceID, setDeviceID] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState("Searching...");
  const  deviceRef = useRef(null);
  const [stepDataChar, setStepDataChar] = useState(null);
  const [data, setData] = useState(0);
  function scanAndConnect() {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        setConnectionStatus("Error")

        return
      }
  
      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'ESP32_APPLICATION' || device.name === 'SensorTag') {
        // Stop scanning as it's not necessary if you are scanning for one device.
        bleManager.stopDeviceScan()
        setConnectionStatus("Connecting...")
        connectToDevice(device)
  
        // Proceed with connection.
      }
    })
  }
  
  useEffect(() => {
    const subscription = bleManager.onStateChange(state => {
      if (state === 'PoweredOn') {
        scanAndConnect()
        subscription.remove()

      }
    }, true)
    return () => subscription.remove()
  }, [bleManager])

  const connectToDevice = (device) => {
    return device
      .connect()
      .then((device) => {
        setDeviceID(device.id)
        setConnectionStatus("Connected")
        deviceRef.current = device;
        return device.discoverAllServicesAndCharacteristics()
      })
      .then((device) => {
        // Do work on device with services and characteristics
        return device.services()
      })
      .then((services) => {
        //console.log(services)
        let service = services.find((service) => service.uuid === SERVICE_UUID)
        return service.characteristics()
      })
      .then((characteristics) => {
        let stepDataCharacteristic = characteristics.find(
          (char) => char.uuid === CHARACTERISTIC_UUID
        );
        setStepDataChar(stepDataCharacteristic);
        stepDataCharacteristic.monitor((error, char) => {
          if (error) {
            console.error(error);
            return;
          }
          const rawStepData = atob(char.value);
          console.log("Received data:", rawStepData);
          setData(rawStepData);
        });
      })
      .catch((err) => {
        // Handle errors
      })
  }
  console.log('====================================');
  console.log(connectionStatus);
  console.log('====================================');
  useEffect(() => {
    const subscription = bleManager.onDeviceDisconnected(
      deviceID,
      (error, device) => {
        if (error) {
          console.log("Disconnected with error:", error);
        }
        setConnectionStatus("Disconnected");
        console.log("Disconnected device");
        setData(null); // Reset the step count
        if (deviceRef.current) {
          setConnectionStatus("Reconnecting...");
          connectToDevice(deviceRef.current)
            .then(() => setConnectionStatus("Connected"))
            .catch((error) => {
              console.log("Reconnection failed: ", error);
              setConnectionStatus("Reconnection failed");
            });
        }
      }
    );
    return () => subscription.remove();
  }, [deviceID, deviceRef]);

  getPermission();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
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
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

//get permission for bluetooth to android
async function getPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Location Permission",
        message:
          "This App needs access to your location " +
          "so we can connect to bluetooth devices.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("Location permission denied");
    }
  } catch (error) {
    console.warn(error);
  }
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