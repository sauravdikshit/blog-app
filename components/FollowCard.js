import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function FollowCard({ item ,onFollowStatusChange,onFollowStatusChangeUnsub}) {
  const [isFollowing, setIsFollowing] = useState(false);
   console.log('====================================');
   console.log("follow Status",isFollowing);
   console.log('====================================');
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    onFollowStatusChange(item._id, !isFollowing);

  
    //  // call the callback function with user id and new follow status
  };

  const handleFollowToggleUnsub = ()=>{
    setIsFollowing(false);
    onFollowStatusChangeUnsub(item._id,isFollowing)
  }
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
              className=" text-[14px]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {item.name}
            </Text>
          </View>
          {isFollowing === false ? (
            <View className="  bg-[#111111] top-10 justify-center  rounded-[12px] ">
              <TouchableOpacity
                className=" w-[90px] h-[28px] items-center justify-center p-1 "
                onPress={
                  handleFollowToggle
                }
              >
                <Text
                  className="text-[#FFFFFF] text-[13px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
            
          ) : (
      



            <View className="   bg-[#00cc00] top-10 justify-center  rounded-[12px] ">
              <TouchableOpacity
                className=" w-[86px] h-[28px] items-center justify-center p-1 "
                onPress={
                  handleFollowToggleUnsub
                }
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
        <Text
                  className="text-[#080808] text-[8px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  {item._id}
                </Text>
      </View>
    </View>
  );
}
