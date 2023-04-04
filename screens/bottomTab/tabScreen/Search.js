import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import ArticleCard from "../../../components/ArticleCard";
import LottieView from "lottie-react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

const Data = [
  {
    id: 1,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
    username: "Rajiv",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "2",
  },
  {
    id: 2,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
    username: "Kumar Shanu",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "124",
  },
  {
    id: 3,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
    username: "Gopinath",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "124",
  },
  {
    id: 4,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "124",
  },
  {
    id: 5,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "124",
  },
  {
    id: 6,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "124",
  },

  {
    id: 7,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "114",
  },

  {
    id: 8,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "134",
  },
  {
    id: 9,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "154",
  },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const handleSearch = (text) => {
    setSearchText(text);
    const keywords = text.toLowerCase().split("");
    const newData = Data.filter((item) => {
      const itemData = item.title.toLowerCase();

      return keywords.every((keyword) => itemData.includes(keyword));
    });
    setFilteredData(newData);
  };

  const renderItem = ({ item }) => <ArticleCard item={item} />;
  return (
    <SafeAreaView className="w-full h-full ">
      <View className="">
        {/* <TextInput
        placeholder="Search"
        onChangeText={(text) => handleSearch(text)}
        value={searchText}
      /> */}

        <TextInput
          className="bg-white  m-4 h-[50px] "
          mode="outlined"
          value={searchText}
          onChangeText={(text) => handleSearch(text)}
          outlineStyle={{
            borderWidth: 0.3,
            borderColor: "#C9C9C9",
            shadowColor: "black",
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0.2,
            elevation: 2,
          }}
          activeOutlineColor="gray"
          placeholder="Search"
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 16,
          }}
          left={<TextInput.Icon icon="magnify" style={{ marginTop: 14 }} />}
          right={
            searchText !== "" ? (
              <TextInput.Icon
                icon={() => (
                  <Icon
                    name={"clear"}
                    size={23}
                    onPress={() => {
                      setSearchText("");
                      setFilteredData(null);
                    }}
                  />
                )}
                style={{ marginTop: 12 }}
              />
            ) : (
              <></>
            )
          }
        />
        {filteredData === null ? (
          <View className="top-44" style={{ alignItems: "center", width }}>
            {/* <Image source={item.image} style={styles.introImageStyle} /> */}
            <Text
              className="text-[20px]"
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              Start Typing to Search..
            </Text>
            <LottieView
              source={require("../../../assets/intro1.json")}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          </View>
        ) : (
          <View className=" flex- mt-12 bottom-14 ">
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
