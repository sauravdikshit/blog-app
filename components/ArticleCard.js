import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ArticleCard({
  item,
  handleClap,
  handleUnclap,
  clapCount,
  onBookmarkStatus,
  onUnBookmarkStatus
  // clappedBy,
}) {
  // const [select, setSelect] = useState(false);

  // console.log('==============is cplapped value======================');
  // console.log(item.isClapped);
  // console.log('====================================');

  const [isBookmark, setIsBookmark] = useState(item.isbookmarked);
  
  console.log("====================================");
  console.log("follow Status", isBookmark);
  console.log("====================================");
  // const [likeCount, setLikeCount] = useState(0);
  const navigation = useNavigation();
  const [isClapped, setIsClapped] = useState(item.isclapped);



  const handleBookmarkToggle = () => {
    setIsBookmark(!isBookmark);

    if (!isBookmark) {
      // user is being followed
      onBookmarkStatus(item._id, true);
    } else {
      // user is being unfollowed
      onUnBookmarkStatus(item._id, false);
    }

    //  // call the callback function with user id and new follow status
  };

  const handleClapPress = () => {
    console.log('====================================');
    console.log("isClapped",item.isclapped);
    console.log('====================================');
    setIsClapped(true)
    handleClap(item.id);
  };

  const handleUnclapPress = () => {
    console.log('====================================');
    console.log("isClapped",item.isclapped);
    console.log('====================================');
    setIsClapped(false)
    handleUnclap(item.id);
  };


  return (
    <View className="">
      <View className="px-4">
        <View className=" flex-row items-center space-x-2 ">
        <Pressable onPress={()=>{navigation.navigate("MainProfile",{item})}}>
          <Image
            className="rounded-full w-10 h-10"
            source={{
              uri: item.user_image,
            }}
          />
          </Pressable>
          <View className="flex-col ">
            <Text
              className="text-[16px] text-[#000000]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {item.user_name}
            </Text>
            <View className="flex-row space-x-2 items-center">
              <Text
                className="text-[10px] text-[#5e5d5d]"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                {item.createdAt}
              </Text>
              <Text
                className="text-[12px] text-[#2e2e2e]"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                {`Topic: ${item.article_topic}`}
              </Text>
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ArticleDetails", { item })}
        >
          <View className="flex-col mt-2 space-y-1">


            <Text
              className="text-[19px]"
              style={{ fontFamily: "Poppins_700Bold" }}
            >
              {item.article_title}
            </Text>
            <Text
              className="text-[15px] text-[#5e5d5d]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              {item.article_sub}
            </Text>
          </View>
          <View className="mt-2">
            <Image
              className=" w-full h-[184px]"
              source={{
                uri: item.article_image,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View className="flex-row items-center justify-between top-1">
          <View className="m-2 right-2 ">
            <View className="flex-row space-x-2  items-center">
              <MaterialCommunityIcons
                name="hand-clap"
                size={25}
                color={
                  isClapped === true ?"#000000": "#808080"
                }
                onPress={isClapped ? handleUnclapPress : handleClapPress}
              />
              <Text
                className="text-[14px] text-[#808080]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                {clapCount}
              </Text>
            </View>
          </View>

          {/* <MaterialCommunityIcons
              name="bookmark-outline"
              size={25}
              color={ isBookmark=== true ?"#000000": "#808080" }
              onPress={
                handleBookmarkToggle
              }
            /> */}

          {isBookmark=== false ? (
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={25}
              color={"#808080"}
              onPress={() => {
               handleBookmarkToggle()
              }}
            />
          ) : (
            <MaterialCommunityIcons
              name="bookmark-check"
              size={25}
              color={"#000000"}
              onPress={() => {
                handleBookmarkToggle()
                
              }}
            />
          )}
        </View>
      </View>

      <Divider className="top-1 mb-4 border-[0.2px] border-[#9d9c9c88] " />
    </View>
  );
}
