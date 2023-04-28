import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState,useEffect,useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native"
import ArticleCard from "../../../components/ArticleCard";
import { LinearGradient } from "expo-linear-gradient";
import * as latestArticle  from "../../../api/blogApi";

export default function Latest() {

  const [latestArticleData,setLatestArticleData]=useState([])


  useEffect(() => {
  getLatestArticle()
}, [])

useFocusEffect(
    useCallback(() => {
      getLatestArticle();
     
     }, [])
   );



  const getLatestArticle = async () => {
    try {
      const response = await latestArticle.latestArticle();

      console.log(response.data);
      setLatestArticleData(response.data)
    } catch (error) {
      if (error.response.status === 404) {
        alert(error.response.status.message);
      } else {
        console.log(error);
      }
    }
  };
  console.log("LatestData", latestArticleData);

  return (
    <SafeAreaView className="  w-full h-full bg-[#F5F5F5]">
      {/* <LinearGradient 
           className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
            colors={['#000',"#FFFa", '#000']}
            start={{ x: 2, y: 1 }}
            end={{ y: 1, x: 1 }}/> */}
      <View className=" flex-1 top-2 mb-16">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={latestArticleData}
          keyExtractor={item =>item._id}
          renderItem={({ item }) => {
            return <ArticleCard item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
