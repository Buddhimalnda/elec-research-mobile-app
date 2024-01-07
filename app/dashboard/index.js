import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import BatteryChargLevel from "./batteryChargLevel";
import MidButton from "./midButton";
import FooterButton from "./footerButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from "./profile";
import Setting from "./setting";
function Dashboard({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          options={{
            headerLeft: () => (
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Entypo name="menu" size={34} color="black" />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <MaterialIcons name="bluetooth" size={24} color="black" />
              </View>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          component={Home}
        />
        {/* <Tab.Screen
          name="Food"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" size={24} color={color}  />
            ),
          }}
          component={MidButton}
        />
        <Tab.Screen
          name="Tracking"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="running" size={24} color={color} />
            ),
          }}
          component={MidButton}
        /> */}
        <Tab.Screen
          name="Setting"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={24} color={color} />
            ),headerLeft: () => (
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Entypo name="menu" size={34} color="black" />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <MaterialIcons name="bluetooth" size={24} color="black" />
              </View>
            ),
          }}
          component={Setting}
        />
        <Tab.Screen
          name="Me"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color}   />
            ),headerLeft: () => (
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Entypo name="menu" size={34} color="black" />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <MaterialIcons name="bluetooth" size={24} color="black" />
              </View>
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});

export default Dashboard;
