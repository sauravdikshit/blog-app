import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ArticleCard({ item }) {
  const [color, setColor] = useState("#808080");
  const [select, setSelect] = useState("1");
  const [bookmark, setBookmark] = useState("1");
  // const [likeCount, setLikeCount] = useState(0);
  const navigation = useNavigation();

  // const handleLike =   () => setLikeCount(prevCount => prevCount + 1);

  // const getToatal = () => {
  //   let tempTotal = 0;
  //   item.map((item) => {
  //     tempTotal = tempTotal + item.views;
  //   });
  //   return tempTotal;
  // };
  return (
    <View className="">
      <View className="px-4">
        <View className=" flex-row items-center space-x-2 ">
          {/* {item.user_id?.map((user) => (
              <View key={user._id}>
                <Image
            className="rounded-full w-10 h-10"
            source={{
              uri: user.profileimage,
            }}
          />
                <Text
                  className="text-[16px] text-[#000000]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {user.name}
                </Text>
              </View>
            ))} */}
          <Image
            className="rounded-full w-10 h-10"
            source={{
              uri: item.user_image,
            }}
          />
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
            {/* {item.posts &&
              item.posts.map((post) => (
                <View key={post._id}>
                  <Text
                    className="text-[19px]"
                    style={{ fontFamily: "Poppins_700Bold" }}
                  >
                    {post.article.article_title}
                  </Text>

                  <Text
                    className="text-[15px] text-[#5e5d5d]"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                    {post.article.article_sub}
                  </Text>
                  <Image
                    className=" w-full h-[184px]"
                    source={{ uri: post.article.article_image }}
                  />
                </View>
              ))} */}

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
          {select === "1" ? (
            <View className="m-2 right-2 ">
              <View className="flex-row space-x-2  items-center">
                <MaterialCommunityIcons
                  name="hand-clap"
                  size={25}
                  color={color}
                  onPress={() => {
                    setSelect("2"), setColor("#000000");
                  }}
                />
                <Text
                  className="text-[14px] text-[#808080]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {item.views - 1}
                </Text>
              </View>
            </View>
          ) : (
            <View className="m-2 right-2">
              <View className="flex-row space-x-2  items-center">
                <MaterialCommunityIcons
                  name="hand-clap"
                  size={25}
                  color={color}
                  onPress={() => {
                    setColor("#808080"), setSelect("1");
                  }}
                />

                <Text
                  className="text-[14px] text-[#808080]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  {item.views}
                </Text>
              </View>
            </View>
          )}
          {bookmark === "1" ? (
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={25}
              color={"#808080"}
              onPress={() => {
                setBookmark("2");
              }}
            />
          ) : (
            <MaterialCommunityIcons
              name="bookmark"
              size={25}
              color={"#000000"}
              onPress={() => {
                setBookmark("1");
              }}
            />
          )}
        </View>
      </View>

      <Divider className="top-1 mb-4 border-[0.2px] border-[#9d9c9c88] " />
    </View>
  );
}
