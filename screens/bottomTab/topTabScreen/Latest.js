import { View, Text, SafeAreaView, FlatList,ActivityIndicator } from "react-native";
import React, { useState, useEffect, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";
import ArticleCard from "../../../components/ArticleCard";
import { LinearGradient } from "expo-linear-gradient";
import * as latestArticle from "../../../api/blogApi";
import * as clapArticle from "../../../api/blogApi";
import * as unClapArticle from "../../../api/blogApi";
import * as bookmarkArticleData from "../../../api/blogApi";
import * as unbookmarkArticleData from "../../../api/blogApi";

export default function Latest() {
  const [latestArticleData, setLatestArticleData] = useState([]);
  const [clapStatus, setClapStatus] = useState(false);
  const [clapCount, setClapCount] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getLatestArticle();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getLatestArticle();
    }, [])
  );

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    getLatestArticle();
    setRefreshing(false);
  }, []); 

  const getLatestArticle = async () => {
    try {
      setLoading(true)
      const response = await latestArticle.latestArticle();

      console.log(response.data);
      setLatestArticleData(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert(error.response.status.message);
      } else {
        console.log(error);
      }
    }
  };
  console.log("LatestData", latestArticleData);

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
    <SafeAreaView className="  w-full h-full bg-[#F5F5F5]">
      {/* <LinearGradient 
           className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
            colors={['#000',"#FFFa", '#000']}
            start={{ x: 2, y: 1 }}
            end={{ y: 1, x: 1 }}/> */}

         
      {latestArticleData && (
        <View className=" flex-1 top-2 mb-16">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={latestArticleData}
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
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
