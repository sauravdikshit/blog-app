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

// const Data = [
//   {
//     id: 1,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
//   },
//   {
//     id: 2,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
//   },
//   {
//     id: 3,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
//   },
//   {
//     id: 4,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
//   },
//   {
//     id: 5,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
//   },
//   {
//     id: 6,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/pngwing.com.png?alt=media&token=c96d9537-1820-4fae-bd40-c7acb84685d3",
//   },
//   {
//     id: 7,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
//   },
//   {
//     id: 8,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
//   },
//   {
//     id: 9,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
//   },
//   {
//     id: 10,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
//   },
//   {
//     id: 11,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
//   },
//   {
//     id: 12,
//     name: "Saurav Dikshit",
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
//   },
// ];

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
  //      const {data} = followersData
  //      console.log('====================================');
  //      console.log(data);
  //      console.log('====================================');

  const handleFollowStatusChange = async (userId, isFollowing) => {
    // make API call to update the follow status

    // try {
    //       const response = await followStatus.followStatus({
    //             user_id: _id,
    //             is_following: isFollowing,

    //       })

    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }

    // console.log('====================================',isFollowing);

    try {
      const response = await followStatus.followStatus({
        userId: userId,
        // is_following: isFollowing,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleFollowStatusChangeUnsub = async (userId, isFollowing) => {
      // make API call to update the follow status
  
      // try {
      //       const response = await followStatus.followStatus({
      //             user_id: _id,
      //             is_following: isFollowing,
  
      //       })
  
      //       console.log(response.data);
      //     } catch (error) {
      //       console.log(error);
      //     }
  
      // console.log('====================================',isFollowing);
  
      try {
        const response = await followStatusUnsub.followStatusUnsub({
          userId: userId,
          // is_following: isFollowing,
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
                onFollowStatusChangeUnsub={handleFollowStatusChangeUnsub}
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
