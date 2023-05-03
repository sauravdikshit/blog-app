import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FollowCard from "../components/FollowCard";
import { LinearGradient } from "expo-linear-gradient";
import * as getFollowers from "../api/blogApi";
import * as followStatus from "../api/blogApi";
import * as followStatusUnsub from "../api/blogApi";

export default function Follow({ navigation }) {
  const [followersData, setFollowersData] = useState([]);

  useEffect(() => {
    console.log("useeffect called");

    getFollowersData();
  }, []);

  const getFollowersData = async () => {
    try {
      const response = await getFollowers.getFollowers();

      console.log(response.data);
      setFollowersData(response.data);
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.status.message);
      } else {
        console.log(error);
      }
    }
  };
  console.log(" followersDatadata", followersData);

  const handleFollowStatusChange = async (userId, isFollowing) => {
    // make API call to update the follow status

    try {
      const response = await followStatus.followStatus({
        userId: userId,
        isfollowing: isFollowing,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowStatusChange = async (userId, isFollowing) => {
    // make API call to update the follow status

    try {
      const response = await followStatusUnsub.unFollowStatus({
        userId: userId,
        isfollowing: isFollowing,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="light" />
      <LinearGradient
        className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
        colors={["#0000", "#000", "#0000"]}
        start={{ x: 5, y: 2 }}
        end={{ y: 2, x: 0 }}
      />
      <View className="h-[35px] w-full mt-10 px-4">
        <Text
          className="text-[24px] text-[#1e1d1d] top-4"
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          Follow people
        </Text>
      </View>
      <View className=" flex-1 top-4 m-2 ">
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={followersData}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <FollowCard
                item={item}
                onFollowStatusChange={handleFollowStatusChange}
                onFollowStatusChangeUnsub={handleUnFollowStatusChange}
              />
            );
          }}
        />
      </View>

      <View className="items-center">
        <TouchableOpacity
          className="justify-center items-center bg-[#5C5C5C] rounded-[8px] w-[350px] h-[46px] bottom-2"
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        >
          <Text
            className="text-[#FFFFFF] text-[16px]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
