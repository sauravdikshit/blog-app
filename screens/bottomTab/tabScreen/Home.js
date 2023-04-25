import {
  View,
  Text,
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import React, { useState, useRef } from "react";

import { FAB } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Latest from "../topTabScreen/Latest";
import Tech from "../topTabScreen/Tech";
import Angular from "../topTabScreen/Angular";
import AWS from "../topTabScreen/AWS";
import Coding from "../topTabScreen/Coding";
import DataStructure from "../topTabScreen/DataStructure";
import Flutter from "../topTabScreen/Flutter";
import Java from "../topTabScreen/Java";
import JavaScript from "../topTabScreen/JavaScript";
import Next from "../topTabScreen/Next";
import NodeJS from "../topTabScreen/NodeJS";
import Php from "../topTabScreen/Php";
import Python from "../topTabScreen/Python";
import ReactJs from "../topTabScreen/ReactJs";
import ReactNative from "../topTabScreen/ReactNative";
import TypeScript from "../topTabScreen/TypeScript";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";



const screenWidth = Dimensions.get("window").width;

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
  const { width } = useWindowDimensions();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SafeAreaView className="  w-full h-full bg-[#F5F5F5]">
      
   
    
  
        <LinearGradient
          className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
          colors={["#0000", "#000", "#0000"]}
          start={{ x: -6, y: 3 }}
          end={{ y: 0, x: 3.7 }}
        />
        <View className="flex-row px-4 top-2  items-center justify-between">
        <TouchableOpacity className="w-8 h-12 items-center justify-center" onPress={()=>{navigation.openDrawer()}}>
          <MaterialCommunityIcons
            name="menu"
            size={27}
            color={"#FFFF"}
            
          />
          </TouchableOpacity>
     
          <Image
            className="w-60 h-12"
            resizeMode="center"
            source={require("../../../assets/icon-blog.png")}
          />
          <MaterialCommunityIcons
            name="bell"
            size={25}
            color={"#FFFFFF"}
            onPress={() => {
              alert("notification");
            }}
          />
        </View>

        <Tab.Navigator
          screenListeners={{
            state: (e) => {
              // Do something with the state
              setSelectedTab(e.data.state.index);
              console.log("state changed", e.data.state.index);
            },
          }}
          initialRouteName="Latest"
          screenOptions={{
            tabBarPressColor: "#FFFFFF",
            tabBarInactiveTintColor: "#BDBDBD",
            tabBarActiveTintColor: "#FFFDFD",
            
            tabBarScrollEnabled: true,
            tabBarShowLabel: true,

            tabBarItemStyle: {
              width: width / 5,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "700",
              fontFamily: "Poppins_500Medium",
              textTransform: "none",
              width: screenWidth,
            },

            tabBarStyle: {
              marginTop: 25,
              backgroundColor: "rgb(205,205,205,0)",
              elevation: 0,
              borderBottomWidth: 0.9,
              borderBottomColor: "rgba(255, 255, 255, 0)",
              height: 45,
              justifyContent: "center",
            },
            tabBarIndicatorStyle: {
              backgroundColor: "#000",
              borderRadius: 10,
              height:2

            },
          }}
        >
          <Tab.Screen
            name="Latest"
            component={Latest}
            options={{
              tabBarLabel: `Latest`,
            }}
          />

          <Tab.Screen
            name="AWS"
            component={AWS}
            options={{
              tabBarLabel: `AWS`,
            }}
          />
          <Tab.Screen
            name="Angular"
            component={Angular}
            options={{
              tabBarLabel: `Angular`,
            }}
          />
          <Tab.Screen
            name="Coding"
            component={Coding}
            options={{
              tabBarLabel: `Coding`,
            }}
          />

          <Tab.Screen
            name="Data Structure"
            component={DataStructure}
            options={{
              tabBarLabel: `DS`,
            }}
          />

          <Tab.Screen
            name="Flutter"
            component={Flutter}
            options={{
              tabBarLabel: `Flutter`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="Java"
            component={Java}
            options={{
              tabBarLabel: `Java`,
            }}
          />

          <Tab.Screen
            name="JavaScript"
            component={JavaScript}
            options={{
              tabBarLabel: `JS`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="Next JS"
            component={Next}
            options={{
              tabBarLabel: `Next JS`,
            }}
          />

          <Tab.Screen
            name="Node JS"
            component={NodeJS}
            options={{
              tabBarLabel: `Node JS`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="PHP"
            component={Php}
            options={{
              tabBarLabel: `PHP`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="Python"
            component={Python}
            options={{
              tabBarLabel: `Python`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="RectJS"
            component={ReactJs}
            options={{
              tabBarLabel: `ReactJS`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="Tech"
            component={Tech}
            options={{
              tabBarLabel: `Tech`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="React Native"
            component={ReactNative}
            options={{
              tabBarLabel: `React Native`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />

          <Tab.Screen
            name="TypeScript"
            component={TypeScript}
            options={{
              tabBarLabel: `TS`,
              // tabBarBadge:()=> { return <View className="mt-3.5 w-14 mx-2 "><Text  style={{color:  selectedTab === 1 ? "#CE4B2C" : 'black'}} > ({dataLength})</Text></View>}
            }}
          />
        </Tab.Navigator>

        <FAB
          className="absolute right-0 bottom-10 m-8 rounded-full bg-[#0b0605]"
          elevation={2}
          customSize={60}
          icon="plus"
          color="white"
          onPress={() => navigation.navigate("TextEditor")}
        />
  
    </SafeAreaView>
  );
}
