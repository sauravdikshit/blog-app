import { View, Text, SafeAreaView, Image, FlatList,LogBox } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";

import { Divider } from "react-native-paper";

import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ActivityCard from "../../components/ActivityCard";
import * as getProfile from "../../api/blogApi";
import * as followStatus from "../../api/blogApi";
import * as followStatusUnsub from "../../api/blogApi";
import * as getRecentActivity from "../../api/blogApi";


export default function MainProfile({ navigation, route }) {
  const [profileData, setProfileData] = useState([]);
  const [isFollowing, setIsFollowing] = useState();
  const [recentActivityData, setRecentActivityData] = useState([]);

  useEffect(() => {
    console.log("useeffect called");

    getProfileData();
    getRecent();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead']);
  }, []);

  const getProfileData = async () => {
    try {
      let response = "";
      if (route.params !== undefined) {
        const { item } = route.params;
        response = await getProfile.getProfile({
          userId: item.user_id,
        });
      } else {
        response = await getProfile.getProfile();
      }

      setProfileData(response.data);
      setIsFollowing(response.data.isfollowing);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecent = async () => {
   
    try {
      // response = await getRecentActivity.recentActivity({
           
      //       userId:item.user_id
      // });
      let response = "";
      if (route.params !== undefined) {
        const { item } = route.params;
        response = await getRecentActivity.recentActivity({
          userId: item.user_id,
        });
      } else {
        response = await getRecentActivity.recentActivity();
      }

      setRecentActivityData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("====================================");
  console.log("Recent Activity", recentActivityData);
  console.log("====================================");

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

  const handleUnFollowStatusChange = async (userid, isFollowing) => {
    // make API call to update the follow status

    try {
      const response = await followStatusUnsub.unFollowStatus({
        userId: userid,
        isfollowing: isFollowing,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);

    if (!isFollowing) {
      // user is being followed
      handleFollowStatusChange(profileData.userid, true);
    } else {
      // user is being unfollowed
      handleUnFollowStatusChange(profileData.userid, false);
    }

    //  // call the callback function with user id and new follow status
  };

  //     const  renderItem =({ item })=> {
  //       return (
  //         <View className="flex">
  //           {/* <View className='flex-col'> */}
  //           <View className=" flex-row">
  //             <View className="flex-row w-8/12 space-x-10">
  //               <Text
  //                 className="text-[15px]"
  //                 style={{ fontFamily: "Poppins_300Light" }}
  //               >
  //                 {item.createdMonthYear}
  //               </Text>
  //               <View className="flex-row space-x-2">
  //                 <Icon name="mode-edit" size={19} color={"grey"} />
  //                 <Text
  //                   className="text-[14px]"
  //                   style={{ fontFamily: "Poppins_300Light" }}
  //                 >
  //                   Wrote an article
  //                 </Text>
  //               </View>

  //             </View>
  //           </View>
  //           <View className="w-11/12 border-l-2 border-dotted   border-[#7b7b7bb2] ml-7 my-1">
  //           {item.data.map((val, id) => {
  //             console.log('====================================');
  //             console.log(id,"id888888888888");
  //             console.log('====================================');
  //               return (

  //                 <View className="pl-16 " key={id}>
  //                 {/* <View className="flex-row space-x-2 ">
  //                 <Icon name="mode-edit" size={19} color={"grey"} />
  //                 <Text
  //                   className="text-[15px]"
  //                   style={{ fontFamily: "Poppins_300Light" }}
  //                 >
  //                   Wrote an article
  //                 </Text>
  //               </View> */}
  //                   <Text
  //                     className="text-[16px]"
  //                     style={{ fontFamily: "Poppins_700Bold", lineHeight: 25 }}
  //                   >
  //                     {val.article_title}
  //                   </Text>
  //                  <Divider className="" style={{backgroundColor:"#7b7b7bb2"}}/>
  //                 </View>
  //               );
  //             })}

  //           </View>
  //         </View>
  //       );
  //     }

  return (
    <SafeAreaView className="w-full h-full bg-[#F5F5F5]">
      <Appbar.Header className="bg-[#F5F5F5] justify-between">
        <Icon
          name="keyboard-backspace"
          size={30}
          color={"black"}
          onPress={() => navigation.goBack()}
        />
        {profileData.currentuser === true ?(<></>):(
            <IconMat
          name="dots-vertical"
          size={30}
          color={"black"}
          onPress={() => {
            //   navigation.navigate("Home");
          }}
        />
        )}
        
       
      </Appbar.Header>
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        <View className=" flex-col items-center">
          <View className="border-[0.5px] rounded-full">
            <Image
              className=" rounded-full w-[110px] h-[110px]"
              source={{ uri: profileData.profileimage }}
            />
          </View>

          <Text
            className="text-[20px] text-[#000000]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            {profileData.name}
          </Text>
          <Text
            className="text-[13px] text-[#5e5e5ed3] bottom-1"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            {profileData.username}
          </Text>
          <Text
            className="text-[14px] text-[#5e5e5ed3] bottom-1"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            {profileData.profile_tagline}
          </Text>

          <View className="flex-row space-x-6 top-2 ">
            <Text
              className="text-[15px] text-[#0b0b0b]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
             {`${profileData.postscount} Posts`}
            </Text>
            <Text
              className="text-[15px] text-[#0b0b0b]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {`${profileData.followerscount} Followers`}
            </Text>
            <Text
              className="text-[15px] text-[#0b0b0b]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {`${profileData.followingcount} Following`}
            </Text>
          </View>
          <View className="flex-row  space-x-14  top-6">
            {profileData.currentuser === true ? (
              <View className="w-32 h-9 rounded-3xl bg-black border justify-center ">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProfileSettings");
                  }}
                  className=" flex-row justify-center space-x-1"
                >
                  <Icon className="" name="edit" size={18} color={"white"} />
                  <Text
                    className="text-[13px] text-[#fffdfd]"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                className={
                  isFollowing
                    ? `bg-[#2ed708]  w-32 h-9 rounded-3xl justify-center border-[#2ed708] `
                    : `bg-[#000000]  w-32 h-9 rounded-3xl justify-center border `
                }
              >
                <TouchableOpacity
                  onPress={() => {
                    handleFollowToggle();
                  }}
                  className=" flex-row justify-center space-x-1"
                >
                  <Icon
                    className=""
                    name={isFollowing ? "check" : "add"}
                    size={18}
                    color={"white"}
                  />
                  <Text
                    className="text-[13px] text-[#fffdfd]"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                    {isFollowing ? "Unfollow" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <View className="w-32 h-9 rounded-3xl bg-transparent border justify-center p-1">
              <TouchableOpacity className=" flex-row justify-center space-x-1">
                <Icon
                  className=""
                  name="ios-share"
                  size={18}
                  color={"black"}
                  onPress={() => {
                    //   navigation.navigate("Home");
                  }}
                />
                <Text
                  className="text-[13px] text-[#0b0b0b]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  Share Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="bg-[#b8b8b849] border-[0.4px] border-[#5d5d5d] rounded-[8px] w-[350px] h-20 mt-12">
            <View className="flex-col p-2 space-y-3">
              <View className="flex-row items-center space-x-3">
                <Icon
                  className=""
                  name="my-location"
                  size={20}
                  color={"#5e5e5ed3"}
                  onPress={() => {
                    //   navigation.navigate("Home");
                  }}
                />
                <Text
                  className="text-[16px] text-[#5e5e5ed3]"
                  style={{ fontFamily: "Poppins_300Light" }}
                >
                  {profileData.user_location}
                </Text>
              </View>

              <View className="flex-row items-center space-x-3">
                <Icon
                  className=""
                  name="date-range"
                  size={20}
                  color={"#5e5e5ed3"}
                  onPress={() => {
                    //   navigation.navigate("Home");
                  }}
                />
                <Text
                  className="text-[16px] text-[#5e5e5ed3]"
                  style={{ fontFamily: "Poppins_300Light" }}
                >
                  {`Member Since ${profileData.createdMonthYear}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text
            className="  text-[16px] text-[#000000] "
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            My socials
          </Text>
          <View className="flex-row mt-4 px-2 justify-between">
            <View className="rounded-full bg-white w-11 h-11 border-[0.5px] border-[#b3b3b3] items-center justify-center">
              <IconMat
                name="linkedin"
                size={30}
                color={"black"}
                onPress={() => {
                  //   navigation.navigate("Home");
                }}
              />
            </View>

            <View className="rounded-full bg-white w-11 h-11 border-[0.5px] border-[#b3b3b3] items-center justify-center">
              <IconMat
                name="twitter"
                size={30}
                color={"black"}
                onPress={() => {
                  //   navigation.navigate("Home");
                }}
              />
            </View>

            <View className="rounded-full bg-white w-11 h-11 border-[0.5px] border-[#b3b3b3] items-center justify-center">
              <IconMat
                name="github"
                size={30}
                color={"black"}
                onPress={() => {
                  //   navigation.navigate("Home");
                }}
              />
            </View>
            <View className="rounded-full bg-white w-11 h-11 border-[0.5px] border-[#b3b3b3] items-center justify-center">
              <IconMat
                name="stack-overflow"
                size={30}
                color={"black"}
                onPress={() => {
                  //   navigation.navigate("Home");
                }}
              />
            </View>

            <View className="rounded-full bg-white w-11 h-11 border-[0.5px] border-[#b3b3b3] items-center justify-center">
              <IconMat
                name="web"
                size={30}
                color={"black"}
                onPress={() => {
                  //   navigation.navigate("Home");
                }}
              />
            </View>
          </View>
        </View>

        <View className="mt-6 ">
          <Text
            className="  text-[16px] text-[#000000] "
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            About me
          </Text>
          <View className="mt-4 border-[0.2px] border-[#979797] rounded-xl p-4">
            <Text
              className="text-[15px] text-[#202020]"
              style={{ fontFamily: "Poppins_400Regular", lineHeight: 30 }}
            >
              {profileData.bio}
            </Text>
          </View>
        </View>

        <View className="mt-6">
          <Text
            className="  text-[16px] text-[#000000] "
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            My topics
          </Text>
          <View className="flex-row mt-4  px-4 space-x-4">
            <TouchableOpacity
              className=" flex-row items-center  rounded-[20px] bg-[#D5D5D5] w-[140px] h-[40px] space-x-2  "
              onPress={{}}
            >
              <IconMat
                name="react"
                size={20}
                color={"teal"}
                style={{ marginLeft: 10 }}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                React Native
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=" flex-row items-center  rounded-[20px] bg-[#D5D5D5] w-[120px] h-[40px] space-x-2  "
              onPress={{}}
            >
              <IconMat
                name="language-typescript"
                size={20}
                color={"blue"}
                style={{ marginLeft: 10 }}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Typescript
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row mt-4  px-4 space-x-4">
            <TouchableOpacity
              className=" flex-row items-center  rounded-[20px] bg-[#D5D5D5] w-[120px] h-[40px] space-x-2  "
              onPress={{}}
            >
              <IconMat
                name="language-javascript"
                size={20}
                color={"orange"}
                style={{ marginLeft: 10 }}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Javascript
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=" flex-row items-center  rounded-[20px] bg-[#D5D5D5] w-[90px] h-[40px] space-x-2  "
              onPress={{}}
            >
              <IconMat
                name="language-java"
                size={20}
                color={"red"}
                style={{ marginLeft: 10 }}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Java
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=" flex-row items-center  rounded-[20px] bg-[#D5D5D5] w-[100px] h-[40px] space-x-2  "
              onPress={{}}
            >
              <IconMat
                name="angular"
                size={20}
                color={"red"}
                style={{ marginLeft: 10 }}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Angular
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-6 ">
          <Text
            className="  text-[16px] text-[#000000] "
            style={{ fontFamily: "Poppins_600SemiBold" }}
          >
            Recent activity
          </Text>
          <View className="mt-2 flex-1  p-2 h-full">
            {/* <FlatList
              data={recentActivityData}
              keyExtractor={(item) =>
                  item.id
              }
           
              renderItem={({ item }) => {
                return <ActivityCard item={item} />;
              }}
         
            /> */}
            <FlatList
        
              data={recentActivityData}
              keyExtractor={(item, createdMonthYear) => "key" + createdMonthYear}
              renderItem={({ item }) => {
                return <ActivityCard item={item} />;
              }}
            />
          </View>
          <Divider className="" bold="true"/>
          <View className="flex-row justify-between px-1">
         
            <Text
              className="text-[14px] text-[#202020]"
              style={{ fontFamily: "Poppins_400Regular", lineHeight: 30 }}
            >
              {profileData.createdMonthYear}
            </Text>
            <Text className="text-[14px] text-[#202020]"
              style={{ fontFamily: "Poppins_400Regular", lineHeight: 30 }}>Joined Blog App</Text>
          </View>
          <Divider className="bottom-1" bold="true"/>
         </View>
      </ScrollView>
    </SafeAreaView>
  );
}
