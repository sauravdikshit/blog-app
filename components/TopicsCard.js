import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

export default function TopicsCard({ item }) {
  const [value, setValue] = useState([
      "js","java"
  ]);
  const [checked, setChecked] = React.useState("");
  console.log('====================================');
  console.log("----------value radio",value);
  console.log('====================================');
  return (
    <View className=" flex flex-1 items-center  p-2  m-[0.5px]">
      <View className=" w-[160px] h-[100px]  justify-center  rounded-[12px]">
        <Image
          className="rounded-[12px]   w-[160px] h-[100px]"
          source={require("../assets/topics.jpg")}
          resizeMode="center"
        />
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0)", "#000e"]}
          className=" absolute w-full h-full   rounded-[12px]"
        />
        <View className=" absolute flex-row px-2 bottom-1 items-center w-full justify-between">
          <Text
            className="text-[13px] text-white "
            style={{ fontFamily: "Poppins_800ExtraBold" }}
          >
            {item.topic}
          </Text>
          <RadioButton
          
            value={item.value}
            color="#66ff00"
            uncheckedColor="white"
            status={checked === value ? "checked" : "unchecked"}
            onPress={() => setChecked(value)}
          />
          
        </View>
      </View>
    </View>
  );
}
