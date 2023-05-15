import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { TextInput, Appbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import { useFocusEffect } from "@react-navigation/native";
import ArticleCard from "../../../components/ArticleCard";
import * as getBookmarkData from '../../../api/blogApi'
import * as clapArticle from '../../../api/blogApi'
import * as unClapArticle from '../../../api/blogApi'
import * as bookmarkArticle from '../../../api/blogApi'
import * as unbookmarkArticle from '../../../api/blogApi'

export default function Bookmark() {
  const [bookmarkArticleData, setBookmarkArticleData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState();



  useEffect(() => {
    getBookmarkArticle();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getBookmarkArticle();
    }, [])
  );

  const getBookmarkArticle = async () => {
    try {
      const response = await getBookmarkData.getBookmark();
     console.log('============Bookmark Data========================');
     console.log(response.data);
     console.log('============Bookmark Data========================');
      
      setBookmarkArticleData(response.data);
    } catch (error) {
      // if (error.response.status === 404) {
      //   alert(error.response.status.message);
      // } else {
      //   console.log(error);

      // }
      console.log(error);
    }
  };
  console.log("BookmarktData", bookmarkArticleData);

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
      const response = await bookmarkArticle.bookmarkArticle({
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
      const response = await unbookmarkArticle.unBookmarkArticle({
        ArticleId: id,
        isBookmark: isBookmark,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <SafeAreaView className="  w-full h-full bg-[#F5F5F5]">
    {/* <LinearGradient 
         className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
          colors={['#000',"#FFFa", '#000']}
          start={{ x: 2, y: 1 }}
          end={{ y: 1, x: 1 }}/> */}

          <Appbar.Header className="bg-[#F5F5F5] h-14 ">
        <Appbar.Content
          title="Bookmark"
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
    {bookmarkArticleData && (
      <View className=" flex-1 mb-14">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={bookmarkArticleData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ArticleCard
                item={item}
                handleClap={(articleId) => handleClap(articleId)}
                  handleUnclap={(articleId) => handleUnclap(articleId)}
                  clapCount={item.article_clap}
                  onBookmarkStatus={handleBookmarkStatus}
                  onUnBookmarkStatus={handleUnBookmarkStatus}
               
              />
            );
          }}
        />
      </View>
    )}
  </SafeAreaView>
  )
}