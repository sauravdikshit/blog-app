import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as getProfile from "../../api/blogApi";

import { Divider } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";

const CustomDrawer = ({ navigation }) => {

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    console.log("useeffect called");

    getProfileData();
  }, []);

  const getProfileData = async () => {
    try {
      const response = await getProfile.getProfile();

      console.log(response.data);

      console.log("ImageResponse", response.data);
      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(" profileData", profileData);

  // const topics = JSON.stringify(profileData.topic);
  // console.log('====================================');
  // console.log(topics);
  // console.log('====================================');

  //   const [greeting, setGreeting] = useState("");
  // useEffect(() => {
  //     var today = new Date();

  //   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //   if (time > "12:00:00" && time < "16:00:00") {
  //     setGreeting("Good Afternoon!");
  //   } else if (time > "16:00:00") {
  //     setGreeting("Good Evening!");
  //   } else {
  //     setGreeting("Good Morning!");
  //   }
  // }, [greeting]);

  const handleNavigation = (screenName) => {
    navigation.dispatch(DrawerActions.closeDrawer()); // closes the drawer
    navigation.navigate(screenName); // navigates to the specified screen
  };
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light" />

      <View className="  w-full h-72">
        <LinearGradient
          className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
          colors={["#0000", "#000", "#0000"]}
          start={{ x: -6, y: 3 }}
          end={{ y: 0, x: 3.7 }}
        />
        <View className="flex-col mt-8 ">
          <View className=" items-center justify-center w-32 h-32  rounded-full border border-[#FFF] self-center">
            <Image
              className="w-full h-full "
              source={{ uri: profileData.profileimage }}
            />
          </View>

          <Text
            className=" relative text-[24px] text-[#FFF] self-center  top-2"
            style={{ fontFamily: "Poppins_800ExtraBold" }}
          >
            {profileData.name}
          </Text>

          <Text
            className=" relative text-[14px] text-[#FFF] self-center top-[1px]"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {profileData.username}
          </Text>
          {/* <Text className=" relative text-[16px] text-[#FFF] self-center  top-2"
        style={{ fontFamily:"Poppins_400Regular" }}>Bio </Text> */}
          <View className=" relative w-full  h-14 justify-center">
            <Text
              className="  text-[12px] text-[#FFF] self-center "
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              {profileData.bio}
            </Text>
          </View>
        </View>
      </View>
      <Pressable
          onPress={() => {
            handleNavigation("FindPeople");
          }}
        >
          <View className=" flex-row  items-center  p-2 ml-2 top-2">
            <MaterialCommunityIcons
              name={"account-search-outline"}
              size={26}
              color={"black"}
            />

            <View>
              <Text
                className="text-[15px] ml-3 text-[#000000]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Find people
              </Text>
            </View>
          </View>
        </Pressable>
        <Divider className="top-2" />
      <View className="mt-4 ">
        <View className="px-4">
          <Text
            className="  text-[16px] text-[#000000] "
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Your Topics
          </Text>
        </View>

        <Divider className="top-2" />

        {profileData.selected_topics?.[0] ? (
          <Pressable
            onPress={() => {
              alert("item");
            }}
          >
            <View className="flex-row items-center p-2 ml-2 mt-2">
              <MaterialCommunityIcons
                name={profileData.selected_topics?.[0]?.icon}
                size={30}
                color={profileData.selected_topics?.[0]?.color}
              />
              <View>
                <Text
                  className="text-[15px] ml-3 text-[#000000]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {profileData.selected_topics?.[0]?.topic}
                </Text>
              </View>
            </View>
          </Pressable>
        ) : (
          <></>
        )}

        {profileData.selected_topics?.[1] ? (
          <Pressable
            onPress={() => {
              alert("item");
            }}
          >
            <View className="flex-row items-center p-2 ml-2">
              <MaterialCommunityIcons
                name={profileData.selected_topics?.[1]?.icon}
                size={30}
                color={profileData.selected_topics?.[1]?.color}
              />
              <View>
                <Text
                  className="text-[15px] ml-3 text-[#000000]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {profileData.selected_topics?.[1]?.topic}
                </Text>
              </View>
            </View>
          </Pressable>
        ) : (
          <></>
        )}

        {profileData.selected_topics?.[2] ? (
          <Pressable
            onPress={() => {
              alert("item");
            }}
          >
            <View className="flex-row items-center p-2 ml-2">
              <MaterialCommunityIcons
                name={profileData.selected_topics?.[2]?.icon}
                size={30}
                color={profileData.selected_topics?.[2]?.color}
              />
              <View>
                <Text
                  className="text-[15px] ml-3 text-[#000000]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {profileData.selected_topics?.[2]?.topic}
                </Text>
              </View>
            </View>
          </Pressable>
        ) : (
          <></>
        )}

        {profileData.selected_topics?.[3] ? (
          <Pressable
            onPress={() => {
              alert("item");
            }}
          >
            <View className="flex-row items-center p-2 ml-2">
              <MaterialCommunityIcons
                name={profileData.selected_topics?.[3]?.icon}
                size={30}
                color={profileData.selected_topics?.[3]?.color}
              />
              <View>
                <Text
                  className="text-[15px] ml-3 text-[#000000]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {profileData.selected_topics?.[3]?.topic}
                </Text>
              </View>
            </View>
          </Pressable>
        ) : (
          <></>
        )}

        {profileData.selected_topics?.[4] ? (
          <Pressable
            onPress={() => {
              alert("item");
            }}
          >
            <View className="flex-row items-center p-2 ml-2">
              <MaterialCommunityIcons
                name={profileData.selected_topics?.[4]?.icon}
                size={30}
                color={profileData.selected_topics?.[4]?.color}
              />
              <View>
                <Text
                  className="text-[15px] ml-3 text-[#000000]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {profileData.selected_topics?.[4]?.topic}
                </Text>
              </View>
            </View>
          </Pressable>
        ) : (
          <></>
        )}

        <Divider className="top-2" />

  
        <Divider className="top-2" />

        <View className="top-2">
              <Text
                className="text-[15px] ml-3 text-[#000000]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
               { `Joined  at  ${profileData.createdMonthYear}`}
              </Text>
            </View>
      </View>

      
    </>
  );
};

export default CustomDrawer;
