import { View, Text,} from "react-native";
import React,{useState} from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./tabScreen/Home";
import Search from "./tabScreen/Search";
import Bookmark from "./tabScreen/Bookmark";
import Profile from "./tabScreen/Profile"



const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {




  
  return (



    <Tab.Navigator
     
      initialRouteName="Home"
      inactiveColor="#808080"
      activeColor="#000000"
      shifting={false}
      barStyle={{
        height: 55,
        backgroundColor: "#F5F5F5",
       position:"absolute",
       
        borderTopColor:"#cdcbca",
        borderTopWidth:0.9,
   
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
        
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>

   

  );
}
