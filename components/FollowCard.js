import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function FollowCard({ item ,onFollowStatusChange,onFollowStatusChangeUnsub}) {
  const [isFollowing, setIsFollowing] = useState(item.isfollowing);
   console.log('====================================');
   console.log("follow Status",isFollowing);
   console.log('====================================');
   const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  
    if (!isFollowing) {
      // user is being followed
      onFollowStatusChange(item._id, true);
    } else {
      // user is being unfollowed
      onFollowStatusChangeUnsub(item._id, false);
    }
  
   
     //  // call the callback function with user id and new follow status
   };
  return (
    <View className=" flex-1  items-center p-4 bottom-2 ">
      <View className="w-[168px] h-[190px] rounded-[12px]  border-[0.5px]  bg-[#FFFFFF]">
        <View className="flex-col items-center ">
          <Image
            className=" rounded-full w-[60px] h-[60px] top-[20px]"
            source={{
              uri: item.profileimage,
            }}
          />
          <View className="w-[150px] h-[40px] items-center top-8">
            <Text
              className=" text-[16px]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {item.name}
            </Text>
          </View>

          <View className="w-[150px] h-[40px] items-center top-3">
            <Text
              className=" text-[12px]"
              style={{ fontFamily: "Poppins_300Light" }}
            >
              {item.username}
            </Text>
          </View>
        
        

          <View className="w-[80px] h-[28px] top-1 justify-center">
      <View className={`bg-${isFollowing ? '[#00cc00]' : '[#5c5c5caa]'}   rounded-full`}>
        <TouchableOpacity
          className="items-center justify-center p-1"
          onPress={handleFollowToggle}
        >
          <Text
            className="text-[#FFFFFF] text-[12px]"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
        </View>
     
      </View>
    </View>
  );
}
