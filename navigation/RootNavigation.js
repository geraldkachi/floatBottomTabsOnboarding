import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabScreen from "./BottomTabScreen";
import LoginScreen from "../screen/LoginScreen";
import OnboardingScreen from "../screen/OnboardingScreen";

import { AsyncStorage } from "@react-native-community/asyn-storage"

 const [isFirstLauch, setisFirstLauch] = useState(null)

 const AppStack = createStackNavigator();

 useEffect(() => {
  AsyncStorage.getItem('alreadyLaunched').then(value => {
    if(value == null) {
      AsyncStorage.setItem('alreadyLaunch', 'true')
      setisFirstLauch(true)
    } else {
      setisFirstLauch(false)
    }
  })
 }, [])

 if (isFirstLauch === null) {
   return null
 } else if(isFirstLauch === true) {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="BottomTab" component={BottomTabScreen} />
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
 } else {
  <LoginScreen />
 }

function RootNavigation() { // If this works we shouldnt have to use app.js directly... 
  return (
    {isFirstLauch = null ? null : (isFirstLauch = true ? 
      
   ( <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="BottomTab" component={BottomTabScreen} />
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
      </AppStack.Navigator>
    </NavigationContainer>)
    : (<LoginScreen />)
      )}
  );
}

const styles = StyleSheet.create({});

export default RootNavigation;
