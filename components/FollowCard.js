import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function FollowCard({ item }) {
  const [select, setSelect] = useState("1");
  return (
    <View className=" flex flex-1 items-center p-4 ">
      <View className="w-[168px] h-[190px] rounded-[12px]   bg-[#FFFFFF]">
        <View className="flex-col items-center ">
          <Image
            className=" rounded-full w-[60px] h-[60px] top-[20px]"
            source={{
              uri: item.image,
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
          {select === "1" ? (
            <View className=" bg-[#5C5C5C] top-10 justify-center  rounded-[12px] ">
              <TouchableOpacity
                className=" w-[86px] h-[28px] items-center justify-center p-1 "
                onPress={() => {
                  setSelect("2");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[14px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Follow
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className=" bg-[#00cc00] top-10 justify-center  rounded-[12px] ">
              <TouchableOpacity
                className=" w-[86px] h-[28px] items-center justify-center p-1 "
                onPress={() => {
                  setSelect("1");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[14px]"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Unfollow
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
