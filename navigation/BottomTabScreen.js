import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import PostScreen from '../screen/PostScreen'
import HomeScreen from '../screen/HomeScreen'
import FindScreen from '../screen/FindScreen'
import SettingScreen from '../screen/SettingScreen'
import ChatScreen from '../screen/ChatScreen'

import { Octicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator()

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{top: -30, justifyContent:"center", alignItems:'center', ...styles.shadow}}>
        <View style={{width: 70, height: 70, borderRadius: 35, backgroundColor: '#e32f45'}}>
            {children}
        </View>
    </TouchableOpacity>
)

function BottomTabScreen() {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tabs.Screen name="Home"
             options={{
                // tabBarLabel: "Home",
                // tabBarColor: "blue",
                tabBarIcon: ({ focused}) => (
                   <View style={{ justifyContent: 'center', alignItems:'center', top: 10}}>
                        <Octicons name="home" size={24} style={{color: focused ? "#e32f45" : "#748c94"}} />
                        <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Home</Text>
                   </View>
                ),
              }}
            component={HomeScreen} />
            <Tabs.Screen name="Find"
             options={{
                tabBarIcon: ({ focused}) => (
                   <View style={{ justifyContent: 'center', alignItems:'center', top: 10}}>
                        <Octicons name="search" size={24} style={{color: focused ? "#e32f45" : "#748c94"}} />
                        <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Find</Text>
                   </View>
                ),
              }}
             component={FindScreen} />

            <Tabs.Screen name="Post" 
            options={{
                tabBarIcon: ({focused}) => <Octicons name="plus" size={24} style={{color: focused ? "#e32f45" : "#748c94"}} />,
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
            component={PostScreen} />

            <Tabs.Screen name="Setting"
             options={{
                // tabBarLabel: "Home",
                // tabBarColor: "blue",
                tabBarIcon: ({ focused}) => (
                   <View style={{ justifyContent: 'center', alignItems:'center', top: 10}}>
                        <Octicons name="settings" size={24} style={{color: focused ? "#e32f45" : "#748c94"}} />
                        <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Settings</Text>
                   </View>
                ),
              }}
            component={SettingScreen} />
            <Tabs.Screen name="Chat"
             options={{
                // tabBarLabel: "Home",
                // tabBarColor: "blue",
                tabBarIcon: ({ focused}) => (
                   <View style={{ justifyContent: 'center', alignItems:'center', top: 10}}>
                        <Octicons name="chats" size={24} style={{color: focused ? "#e32f45" : "#748c94"}} />
                        {/* <Octicons name="chats" size={24} style={{tintColor: focused ? "#e32f45" : "#748c94"}} /> */}
                        <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Chat</Text>
                   </View>
                ),
              }}
            component={ChatScreen} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:"#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})


export default BottomTabScreen
