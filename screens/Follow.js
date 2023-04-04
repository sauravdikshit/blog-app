import { View, Text,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FollowCard from '../components/FollowCard'

const Data =[
      {
            id:1,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05"

      },
      {
            id:2,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a"

      },
      {
            id:3,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75"

      },
      {
            id:4,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027"

      },
      {
            id:5,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc"

      },
      {
            id:6,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/pngwing.com.png?alt=media&token=c96d9537-1820-4fae-bd40-c7acb84685d3"

      },
      {
            id:7,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a"
      },
      {
            id:8,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05"

      },
      {
            id:9,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05"

      },
      {
            id:10,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05"

      },
      {
            id:11,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a"

      },
      {
            id:12,
            name:"Saurav Dikshit",
            image:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05"

      },
]

export default function Follow({navigation}) {
  return (
    
      <SafeAreaView className=" flex flex-1 w-full h-full bg-[#EBEBEB]">
      <View className="h-[35px] w-full mt-8 px-4">
            <Text className="text-[24px]" style={{fontFamily:"Poppins_600SemiBold"}} >Follow people</Text>
      </View>
      <View className="flex flex-1  top-4 px-2 m-[0.5px]">
        <FlatList
        showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Data}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <FollowCard
                item={item}
               
              />
            );
          }}
        />
      </View>
      <View className="px-4   items-center mt-8 ">
      <TouchableOpacity
                  className="justify-center items-center bg-[#5C5C5C] rounded-[8px] w-[350px] h-[46px] bottom-2"
                  onPress={()=>{navigation.navigate("TabNavigation")}}
                >
                  <Text
                    className="text-[#FFFFFF] text-[16px]"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                 Next
                  </Text>
                </TouchableOpacity>
      </View>


      </SafeAreaView>
  )
}