import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function TopicsCard({  item, selectedValue, handleSelectOption}) {

  const [value, setValue] = useState(item);


  console.log('====================================');
  console.log(" Value",value);
  console.log('====================================');



  return (
    <View className="  flex-1 items-center  ">
 
      <View className=" w-[175px] h-[125px]  mb-8 justify-center  rounded-[12px] bg-white border-[0.5px] items-center">
     
  
        <MaterialCommunityIcons   name={item.icon} size={45} color={item.color} style={{marginBottom:29}} />
       
        <View className=" absolute flex-row  px-2 bottom-0 items-center w-full justify-between">
          <Text
            className="text-[13px] text-black"
            style={{ fontFamily: "Poppins_800ExtraBold" }}
          >
            {item.topic}
          </Text>
          <RadioButton
          value={item}
        color="#66ff00"
        uncheckedColor="black"
        status={selectedValue.includes(item) ? "checked" : "unchecked"}
            onPress={() => handleSelectOption(item)}
           
          />


          
        </View>
      </View>
     
    </View>
  );
}
