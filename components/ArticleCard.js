import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-paper";

export default function ArticleCard({item}) {
  const [color,setColor] = useState("#808080")
  const [select, setSelect] = useState("1");
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };


  // const getToatal = () => {
  //   let tempTotal = 0;
  //   item.map((item) => {
  //     tempTotal = tempTotal + item.views;
  //   });
  //   return tempTotal;
  // };
  return (
 
    <View className="mt-4 border-b-[0.4px] border-b-[#bcbcbc] ">
    <View className="px-4">
    <View className=" flex-row items-center space-x-2 ">
        <Image
          className="rounded-full w-10 h-10"
          source={{
              uri: item.profileimage,
            }}
        />
        <View className="flex-col ">
          <Text
            className="text-[16px] text-[#000000]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            {item.username}
          </Text>
          <Text
            className="text-[10px] text-[#5e5d5d]"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
           {item.posttime}
          </Text>
        </View>
      </View>
      <View className="flex-col mt-2 space-y-1">
        <Text className="text-[19px]" style={{ fontFamily: "Poppins_700Bold" }}>
          {item.title}
        </Text>
        <Text
          className="text-[15px] text-[#5e5d5d]"
          style={{ fontFamily: "Poppins_500Medium" }}
        >
          {item.subtitle}
        </Text>
      </View>
      <View className="mt-2">
        <Image
          className=" w-full h-[184px]"
          source={{
              uri: item.coverimage,
            }}
        />
      </View>
      {select==="1" ? (
        <View className="m-2 right-2 ">
      <View className="flex-row space-x-2  items-center">
  
        <MaterialCommunityIcons name="hand-clap" size={25} color={color} onPress={()=>{setSelect("2"),setColor("#000000")}}/>
        <Text className="text-[14px] text-[#808080]"  style={{ fontFamily: "Poppins_500Medium" }}>{item.views-1}</Text>
      </View>

      </View>
      ):(
        <View className="m-2 right-2">
      <View className="flex-row space-x-2  items-center">
  
        <MaterialCommunityIcons name="hand-clap" size={25} color={color} onPress={()=>{setColor("#808080"),setSelect("1")}}/>
        
        <Text className="text-[14px] text-[#808080]"  style={{ fontFamily: "Poppins_500Medium" }}>{item.views}</Text>
      </View>

      </View>
      )}
   
     
      
    </View>

      
    </View>
   
  
    
  );
}
