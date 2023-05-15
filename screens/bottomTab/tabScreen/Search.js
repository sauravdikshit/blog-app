import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Appbar } from "react-native-paper";
import ArticleCard from "../../../components/ArticleCard";
import LottieView from "lottie-react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
import * as searchArticleData from "../../../api/blogApi";
import * as clapArticle from "../../../api/blogApi";
import * as unClapArticle from "../../../api/blogApi";
import * as bookmarkArticleData from '../../../api/blogApi'
import * as unbookmarkArticleData from '../../../api/blogApi'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // Function to fetch search results from the API
    const fetchSearchArticle = async () => {
      try {
        const response = await searchArticleData.searchArticle({
          query: searchQuery,
        });
        console.log('===========Search Data=========================');
        console.log("Search DATA", response.data);
        console.log('===========Search Data=========================');
       

        setSearchResults(response.data);
      } catch (error) {
        if (error.response.status === 404) {
          setError(error.response.data.message);
        } else if (error.response.status === 400) {
          setError(error.response.data.message);
        }
        if (error.response.status === 500) {
          setError(error.response.data.message);
        } else {
          console.log(error);
        }
      }
    };

    // Call the fetchSearchResults function when searchQuery changes
    if (searchQuery !== "") {
      fetchSearchArticle();
    }
  }, [searchQuery]);

  // const handleSearch = (text) => {
  //   setSearchText(text);
  //   const keywords = text.toLowerCase().split("");
  //   const newData = Data.filter((item) => {
  //     const itemData = item.title.toLowerCase();

  //     return keywords.every((keyword) => itemData.includes(keyword));
  //   });
  //   setFilteredData(newData);
  // };

  // const renderItem = ({ item }) => <ArticleCard item={item} />;

  const handleClap = async (articleId, isClapped) => {
    try {
      const response = await clapArticle.clap({
        articleId: articleId,
        isclapped: isClapped,
      });
      console.log("clapped data", response.data);
      if (response.ok) {
        console.log("clapped ok", response.ok);
        setClapCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnclap = async (articleId, isClapped) => {
    try {
      const response = await unClapArticle.unClap({
        articleId: articleId,
        isclapped: isClapped,
      });
      console.log("unclapped data", response.data);
      if (response.ok) {
        console.log("clapped ok", response.ok);
        setClapCount((prevCount) => prevCount - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmarkStatus = async (id, isBookmark) => {
    // make API call to update the follow status

    try {
      const response = await bookmarkArticleData.bookmarkArticle({
        ArticleId: id,
        isBookmark: isBookmark,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnBookmarkStatus = async (id, isBookmark) => {
    // make API call to update the follow status

    try {
      const response = await unbookmarkArticleData.unBookmarkArticle({
        ArticleId: id,
        isBookmark: isBookmark,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView className=" w-full h-full bg-[#F5F5F5] ">
      <Appbar.Header className="bg-[#F5F5F5] h-14 ">
        <Appbar.Content
          title="Search"
          titleStyle={{ fontFamily: "Poppins_500Medium", fontSize: 20 }}
        />
      </Appbar.Header>

      {/* <LinearGradient 
           className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
            colors={['#0000',"#C4BFBF", '#000']}
            start={{ x: 0, y: 2 }}
            end={{ y: 0, x: 0.3 }}/> */}

      {/* <TextInput
        placeholder="Search"
        onChangeText={(text) => handleSearch(text)}
        value={searchText}
      /> */}

      <View className="px-4 bottom-2">
        <TextInput
          className="bg-white h-[45px] "
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
      {searchResults.length > 0 ? (
        <View className="flex-1 mb-12 ">
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <ArticleCard 
              item={item}
              handleClap={(articleId) => handleClap(articleId)}
                  handleUnclap={(articleId) => handleUnclap(articleId)}
                  clapCount={item.article_clap}
                  onBookmarkStatus={handleBookmarkStatus}
                  onUnBookmarkStatus={handleUnBookmarkStatus} />;
            }}
          />
        </View>
      ) : searchQuery ? (
        <View className="top-32" style={{ alignItems: "center" }}>
        <LottieView
            source={require("../../../assets/error-404-page-not-found.json")}
            autoPlay
            loop
            style={{ width: 250, height: 250 }}
          />
          <Text
            className="text-[20px] bottom-12"
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
            source={require("../../../assets/intro1.json")}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
