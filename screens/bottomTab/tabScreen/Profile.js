import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";
import { Appbar, Divider, Card } from "react-native-paper";
import IconAsw from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import * as ProfileViewData from '../../../api/blogApi'
import { Pressable } from "react-native";

export default function Profile({navigation}) {

  const [profileViewData, setProfileViewData]= useState([])


  useEffect(() => {
    getProfile()
 
  }, []);

  useFocusEffect(
    useCallback(() => {
     getProfile();
    }, [])
  );

  const getProfile = async () => {
    try {
      const response = await ProfileViewData.profileView();

      console.log(response.data);
      setProfileViewData(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert(error.response.status.message);
      } else {
        console.log(error);
      }
    }
  };
  console.log('===========Profile Data=========================');
  console.log(profileViewData);
  console.log('===========Profile Data=========================');


  return (
    <SafeAreaView className=" w-full h-full bg-[#e7e7e79f]">
      <Appbar.Header className="bg-[#F5F5F5] h-14 ">
        <Appbar.Content
          title="Profile"
          titleStyle={{ fontFamily: "Poppins_500Medium", fontSize: 20 }}
        />
      </Appbar.Header>
      <View className="px-4">

    
      <Pressable onPress={()=>{navigation.navigate("MainProfile")}}>
        <View className="flex-row  mt-2  space-x-5">
   

          <Image
            className="rounded-full w-[70px] h-[70px] "
            source={{
              uri: profileViewData.profileimg,
            }}
          />
              

          <View className="flex-col  justify-center">
            <Text
              className="text-[20px] text-[#000000] "
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {profileViewData.name}
            </Text>
            <Text
              className="text-[13px] text-[#5e5e5ed3] bottom-1"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
             {profileViewData.username}
            </Text>

            <View className="flex-row space-x-3">
            <Text
                className="text-[15px] text-[#0b0b0b]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
      
              {`${profileViewData.postscount} Posts`}
              </Text>
              <Text
                className="text-[15px] text-[#0b0b0b]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
              {`${profileViewData.followerscount} Followers`}
              </Text>
              <Text
                className="text-[15px] text-[#0b0b0b]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
               {`${profileViewData.followingcount} Following`}
              </Text>
            </View>
          </View>
        </View>
        </Pressable> 
    

        <View className="mt-4">
          <Card
            className="rounded-md bg-white"
            style={{
              elevation: 0,
            }}
          >
         
            <View className="flex-row justify-between m-4  mt-4 ">
      
            <View className="flex-row space-x-2">
            <IconAsw
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="article"
                size={20}
                color="gray"
              />
              <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
                My articles
              </Text>

            </View>
            
              <IconAsw
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>
      

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <Icon name="document-text" size={20} color="gray" />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
                My drafts
              </Text>

            </View>
              
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <IconAsw name="history" size={20} color="gray" />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            My reading history
              </Text>

            </View>
            
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>
        <View className="mt-2">
          <Card
            className="rounded-md bg-white"
           
            style={{
              elevation: 0,
            }}
          >
                 <Pressable onPress={()=>{navigation.navigate("MainProfile")}}>
            <View className="flex-row justify-between m-4  mt-4 ">
            <View className="flex-row space-x-2">
            <IconAsw
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="person"
                size={20}
                color="gray"
              />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
                My profile
              </Text>

            </View>
              
              <IconAsw
                onPress={()=>{navigation.navigate("MainProfile")}}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>
            </Pressable>

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <IconAsw
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="settings"
                size={20}
                color="gray"
              />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            Settings
              </Text>

            </View>
             
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <IconAsw
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="notifications"
                size={20}
                color="gray"
              />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            Notifications
              </Text>

            </View>
             
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>

        <View className="mt-2">
          <Card
            className="rounded-md bg-white"
         
            style={{
              elevation: 0,
            }}
          >
            <View className="flex-row justify-between m-4  mt-4 ">
            <View className="flex-row space-x-2">
            <IconMat
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="linkedin"
                size={20}
                color="gray"
              />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
             Linkedin
              </Text>

            </View>
              <IconAsw
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="arrow-forward-ios"
                size={18}
                color="gray"
              />
            </View>

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <IconMat
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="instagram"
                size={20}
                color="gray"
              />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            Instagram
              </Text>

            </View>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>

            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <IconMat
                onPress={() => {
                  // navigation.navigate("Orders");
                }}
                name="twitter"
                size={20}
                color="gray"
              />
            <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            Twitter
              </Text>

            </View>
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>

        <View className="mt-2">
          <Card
            className=" rounded-md bg-white"
            // theme={{ roundness: 2 }}
            // style={{
            //   height: responsiveHeight(14),
            //   backgroundColor: theme.colors.cardcolor,
            // }}
            style={{
              elevation: 0,
            }}
          >
            <Divider />

            <View className="flex-row justify-between m-4 mt-4 ">
            <View className="flex-row space-x-2">
            <IconAsw
              name="logout"
              size={20}
              color="red"

            />
             <Text
                className="text-[#f70d0d]"
                style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}
              >
                Logout
              </Text>

            </View>
             
              <IconAsw name="arrow-forward-ios" size={18} color="gray" />
            </View>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}
