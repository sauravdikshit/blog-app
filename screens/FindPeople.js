import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput,Appbar } from "react-native-paper";
import FindPeopleCard from "../components/FindPeopleCard";
import LottieView from "lottie-react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

const Data = [
  {
    id: 1,
    name: "Saurav Dikshit",
    topics:"Java,React",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
  },
  {
    id: 2,
    name: "Rajiv",
    topics:"JavaScript,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
  },
  {
    id: 3,
    name: "Sanjiv",
    topics:"Python,Flask",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
  },
  {
    id: 4,
    name: "Praveen",
    topics:"Android,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
  },
  {
    id: 5,
    name: "Rajiv",
    topics:"Python,React",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
  },
  {
    id: 6,
    name: "Umesha",
    topics:"ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/pngwing.com.png?alt=media&token=c96d9537-1820-4fae-bd40-c7acb84685d3",
  },
  {
    id: 7,
    name: "Saurav Dikshit",
    topics:"JavaScript,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
  },
  {
    id: 8,
    name: "Saurav Singh",
    topics:"JavaScript,ReactNative,Kotlin",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
  },
  {
    id: 9,
    name: "Jhon",
    topics:"JavaScript,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
  },
  {
    id: 10,
    name: "Mark",
    topics:"JavaScript,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
  },
  {
    id: 11,
    name: "Laura",
    topics:"JavaScript,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
  },
  {
    id: 12,
    name: "Stonis",
    topics:"JavaScript,ReactNative",
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
  },
];

export default function FindPeople({navigation}) {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const handleSearch = (text) => {
    setSearchText(text);
    const keywords = text.toLowerCase().split("");
    const newData = Data.filter((item) => {
      const itemData = item.name.toLowerCase();

      return keywords.every((keyword) => itemData.includes(keyword));
    });
    setFilteredData(newData);
  };

  // const renderItem = ({ item }) => <ArticleCard item={item} />;
  return (
    <>

<Appbar.Header className="bg-[#000000]">
<View className="flex-row space-x-4 items-center">
<Icon name="keyboard-backspace" size={30} color={"white"} onPress={()=>{navigation.navigate("Home")}}/>

<TextInput
            className="bg-white h-[40px] w-80 "
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

</View>
      {/* <Appbar.BackAction
      
        
          onPress={() => {
            navigation.navigate("Home");
          }}
        /> */}
             

      </Appbar.Header>
      {/* <LinearGradient 
           className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
            colors={['#0000',"#C4BFBF", '#000']}
            start={{ x: 0, y: 2 }}
            end={{ y: 0, x: 0.3 }}/> */}
      <View className="top-0 ">
        {/* <TextInput
        placeholder="Search"
        onChangeText={(text) => handleSearch(text)}
        value={searchText}
      /> */}

        {/* <View className="px-4">
          <TextInput
            className="bg-white h-[50px] "
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
        </View> */}
        {filteredData === null ? (
          <View className="top-44" style={{ alignItems: "center", width }}>
            {/* <profileimage source={item.profileimage} style={styles.introprofileimageStyle} /> */}
            <Text
              className="text-[20px]"
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              Start Typing to Search..
            </Text>
            <LottieView
              source={require("../assets/intro1.json")}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          </View>
        ) : (
          <View className="mb-28 top-2">
            <FlatList
              showsVerticalScrollIndicator={false}
            
              data={filteredData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <FindPeopleCard item={item} />;
              }}
            />
          </View>
        )}
      </View>
      </>
  );
}
