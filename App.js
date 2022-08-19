
import React from "react";
import {Button,  StyleSheet, Text, View } from 'react-native';
// import { TailwindProvider } from "tailwindcss-react-native";
// import { Button } from "react-native-web";
// import tw, { useTailwind } from 'tailwind-rn';
import {TailwindProvider} from "tailwindcss-react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator(); 

export default function App() {
  // const tailwind = useTailwind();
  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator>
      <Stack.Screen name = "Home" component={HomeScreen}/>
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>

  );
}

