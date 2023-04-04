import { View, Text,Dimensions,useWindowDimensions ,ListRenderItem } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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



const screenWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
 
      const { width } = useWindowDimensions()
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView className="flex-1 w-full h-full bg-[#EBEBEB]">



  <View className="flex-row px-4 mt-12 items-center justify-between h-10">
  <Text className="text-[25px] " style={{fontFamily:"Poppins_700Bold"}}>Home</Text>
  <MaterialCommunityIcons name="bell" size={25} onPress={()=>{alert("notification")}}/>

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
          tabBarInactiveTintColor: "#808080",
          tabBarActiveTintColor: "#010203",
          tabBarScrollEnabled:true,
          tabBarShowLabel:true,
          
          tabBarItemStyle:{
            width: width/5,
            justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                
               


          },
             

          tabBarLabelStyle: {
            fontSize:12,
            fontWeight:"600",
            fontFamily:"Poppins_500Medium",
            textTransform: "none",
            width:screenWidth,
            
            
         

          },
      
          tabBarStyle: {
          marginTop:40, 
          backgroundColor: "#EBEBEB",
          elevation:0,
          borderBottomWidth:0.9,
          borderBottomColor:"#cdcbca",
 
        

          },
          tabBarIndicatorStyle: {
            backgroundColor: "#010b13",
            borderRadius: 10,
            height:1.8
           
       
            
   
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

