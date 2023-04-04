import { View, Text, SafeAreaView,FlatList,TouchableOpacity } from "react-native";
import React from "react";
import TopicsCard from "../components/TopicsCard";

const Data = [
  {
    id: 1,
    topic: "Java Script",
    value: "js",
  },
  {
      id: 2,
      topic: "Java",
      value: "java",
    },
    {
      id: 3,
      topic: "React Native",
      value: "rn",
    },
    {
      id: 4,
      topic: "React JS",
      value: "react",
    },

    {
      id: 5,
      topic: "Flutter",
      value: "flutter",
    },

    {
      id: 6,
      topic: "Next JS",
      value: "next js",
    },

    {
      id: 7,
      topic: "PHP",
      value: "php",
    },

    {
      id: 8,
      topic: "Python",
      value: "py",
    },
    {
      id: 9,
      topic: "Data Structure",
      value: "ds",
    },

    {
      id: 10,
      topic: "GO",
      value: "go",
    },

    {
      id: 11,
      topic: "Dot Net",
      value: ".net",
    },
    {
      id: 12,
      topic: "IOT",
      value: ".net",
    },
 
];

export default function Topics({navigation}) {
  return <SafeAreaView className="  w-full h-full bg-[#EBEBEB]">

  <View className="w-full h-40 px-4">
      <Text className="text-[#000000] text-[24px] mt-20" style={{fontFamily:"Poppins_600SemiBold"}}>Choose Topics</Text>
  </View>
       <View className=" flex-1  bottom-4 ">
        <FlatList
         showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Data}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <TopicsCard
                item={item}
               
              />
            );
          }}
        />
      </View>

      <View className="px-4   items-center  ">
      <TouchableOpacity
                  className="justify-center items-center bg-[#5C5C5C] rounded-[8px] w-[350px] h-[46px] bottom-2"
                  onPress={()=>{navigation.navigate("Follow")}}
                >
                  <Text
                    className="text-[#FFFFFF] text-[16px]"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                 Next
                  </Text>
                </TouchableOpacity>
      </View>
  </SafeAreaView>;
}
