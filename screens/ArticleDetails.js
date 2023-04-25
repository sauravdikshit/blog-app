import { View, Text,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";

export default function ArticleDetails({ route }) {
      const [select, setSelect] = useState("1");
      const navigation = useNavigation();

      const { item } = route.params;
      console.log(item,"ITEM____________");
  return (
      <SafeAreaView className=" h-full w-full bg-[#F5F5F5]">
      <Appbar className="bg-[#F5F5F5]">
      <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />

      </Appbar>
      <ScrollView className="">
            <View>
            <Image
          className=" w-full h-[184px]"
          source={{
              uri: item.coverimage,
            }}
        />

                
            </View>

            <View className="flex-col mt-2 space-y-1 px-4">
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
     <View className="w-full h-14">
      <View className=" flex-row items-center  space-x-4 justify-center mt-4">
        <Image
          className="rounded-full w-14 h-14 right-4"
          source={{
              uri: item.profileimage,
            }}
        />


        <View className="flex-col right-5 ">
          <Text
            className="text-[18px] text-[#000000]"
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
        <View className="left-4" >
        {select === "1" ? (
            <View className=" bg-[#5C5C5C] w-[86px]  h-[28px] rounded-[12px]  ">
              <TouchableOpacity
                className="  items-center justify-center p-1 "
                onPress={() => {
                  setSelect("2");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[13px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
        ):(
            
            <View className=" bg-[#00cc00] w-[89px]  h-[28px] rounded-[12px] ">
              <TouchableOpacity
                className="items-center justify-center p-1 "
                onPress={() => {
                  setSelect("1");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[13px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                Subscribed
                </Text>
              </TouchableOpacity>
            </View> 
        )}

        </View>
       
        </View>
        </View>
      

       

       
   
      <View className="px-4 mt-8">
            <Text className="text-[17px] text-[#010101]"
          style={{ fontFamily: "Poppins_500Medium" }}>{item.content}</Text>
        </View>
      
      </ScrollView>


      </SafeAreaView>
   
  )
}