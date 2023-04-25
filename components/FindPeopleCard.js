import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function FindPeopleCard({ item }) {
 
      const [select, setSelect] = useState("1");
  return (
    <View className=" flex-row border-b-[0.5px] border-b-[#c0bfbf] p-2 items-center justify-between">
      <View className="flex-row items-center space-x-2">
      <Image
          className="rounded-full w-16 h-16 "
          source={{
              uri: item.profileimage
            }}
        />
      <View className="flex-col ">
      <Text className="text-[15px] text-[#000000]"
            style={{ fontFamily: "Poppins_500Medium" }}>{item.name}</Text>
     <View className="flex-row items-center">
     <Text className="text-[12px] text-[#5C5C5C]"
            style={{ fontFamily: "Poppins_500Medium" }}>Topics:</Text>
      <Text className="text-[10px] text-[#D54D1E]"
            style={{ fontFamily: "Poppins_500Medium" }}>{item.topics}</Text>


     </View>
        
      </View>
      

    


      </View>
      
      <View className="ml-4 " >
        {select === "1" ? (
            <View className=" bg-[#5C5C5C] w-[80px]  h-[28px] rounded-[12px]  ">
              <TouchableOpacity
                className="  items-center justify-center p-1"
                onPress={() => {
                  setSelect("2");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[12px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
        ):(
            
            <View className=" bg-[#00cc00] w-[80px]  h-[28px] rounded-[12px] ">
              <TouchableOpacity
                className="items-center justify-center p-1 "
                onPress={() => {
                  setSelect("1");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[12px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                Subscribed
                </Text>
              </TouchableOpacity>
            </View> 
        )}

        </View>
    </View>
  )
}