import { View, Text, FlatList, Dimensions,Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Appbar } from "react-native-paper";
import FindPeopleCard from "../components/FindPeopleCard";
import LottieView from "lottie-react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
import * as getPeople from "../api/blogApi";
import * as followStatus from "../api/blogApi";
import * as followStatusUnsub from "../api/blogApi";

export default function FindPeople({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error,setError] = useState() 

  const [searchTerm, setSearchTerm] = useState("");

  // const [searchText, setSearchText] = useState("");
  // const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    // Function to fetch search results from the API
    const fetchSearchResults = async () => {
      // const response = await fetch(`https://example.com/search?query=${searchQuery}`);
      try {
        const response = await getPeople.getSearchPeople({
          query: searchQuery,
        });
        console.log("Search DATA", response.data);

        setSearchResults(response.data);
      } catch (error) {
        if (error.response.status === 404) {
         
          setError(error.response.data.message)
        } else if (error.response.status === 400) {
          setError(error.response.data.message)
        }
        if (error.response.status === 500) {
          setError(error.response.data.message)
        }  
        else {
          console.log(error);
        }
 
      }
    };

    // Call the fetchSearchResults function when searchQuery changes
    if (searchQuery !== "") {
      fetchSearchResults();
    }
  }, [searchQuery]);

  // const handleSearch = (text) => {
  //   setSearchText(text);
  //   const keywords = text.toLowerCase().split("");
  //   const newData = Data.filter((item) => {
  //     const itemData = item.name.toLowerCase();

  //     return keywords.every((keyword) => itemData.includes(keyword));
  //   });
  //   setFilteredData(newData);
  // };

  // const renderItem = ({ item }) => <ArticleCard item={item} />;

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
      <Appbar.Header className="bg-[#000000]">
        <View className="flex-row space-x-4 items-center">
          <Icon
            name="keyboard-backspace"
            size={30}
            color={"white"}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />

          <TextInput
            className="bg-white h-[40px] w-80 "
            mode="outlined"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
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
              searchQuery !== "" ? (
                <TextInput.Icon
                  icon={() => (
                    <Icon
                      name={"clear"}
                      size={23}
                      onPress={() => {
                        setSearchQuery("");
                        setSearchResults([]);
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
      </Appbar.Header>

      <View className="top-0 ">
        {searchResults.length > 0 ? (
          <View className="mb-28 top-2">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={searchResults}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return (
                  <FindPeopleCard
                    item={item}
                    onFollowStatusChange={handleFollowStatusChange}
                    onFollowStatusChangeUnsub={handleUnFollowStatusChange}
                  />
                );
              }}
            />
          </View>
        ) : searchQuery ? (
          <View className="top-44" style={{ alignItems: "center", width }}>
            <Text
              className="text-[20px]"
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              {error}
            </Text>
          </View>
        ) : (
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
        )}
      </View>
    </>
  );
}
