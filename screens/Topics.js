import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import TopicsCard from "../components/TopicsCard";
import { LinearGradient } from "expo-linear-gradient";
import * as selectedTopics from "../api/blogApi";
import * as getTopic from "../api/blogApi";


export default function Topics({ navigation }) {
  const [selectedValue, setSelectedValue] = useState([]);

  const [getTopicsData, setTopicsData] = useState([]);

  const handleSelectOption = (item) => {
    if (selectedValue.includes(item)) {
      setSelectedValue(selectedValue.filter((value) => value !== item));
    } else {
      if(selectedValue.length < 5){
        setSelectedValue([...selectedValue, item]);
      }else{
        Alert.alert('Limit Reached','You can only select upto 5 topics');
      }
      
    }
  };


  const postTopics = async (data) => {
    console.log("====================================");
    console.log("calll");
    console.log("====================================");
    try {
      console.log("====================================");
      console.log("trycatch");
      console.log("====================================");

      const response = await selectedTopics.selectedTopics({
       

        topics: selectedValue,
      });
      console.log("====================================");
      console.log("response");
      console.log("====================================");
      if (response.data.message == "Selected topics added successfully") {
        navigation.navigate("Follow");
      } else {
        console.log("Something is wrrong");
      }
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  console.log("====================================");
  console.log("selected Value", selectedValue);
  console.log("====================================");

  useEffect(() => {
    console.log("useeffect called");

    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getTopic.getTopics();
      console.log(response.data);

      setTopicsData(response.data);
    } catch (error) {
      console.log("Error");
    }
  };
  console.log("getTopicsDatadata", getTopicsData);

  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="light" />
      <LinearGradient
        className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
        colors={["#0000", "#000", "#0000"]}
        start={{ x: 5, y: 2 }}
        end={{ y: 2, x: 0 }}
      />

      <View className="h-[35px] w-full mt-10 px-4">
        <Text
          className="text-[24px] top-4 text-[#1e1d1d]"
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          Choose Topics
        </Text>
      </View>
      <View className=" flex-1 top-8 px-1 mb-4 ">
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={getTopicsData}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <TopicsCard
                item={item}
                selectedValue={selectedValue}
                handleSelectOption={handleSelectOption}
              />
            );
          }}
        />
      </View>

      <View className="px-4   items-center  ">
        <TouchableOpacity
          className="justify-center items-center bg-[#5C5C5C] rounded-[8px] w-[350px] h-[46px] bottom-2"
          onPress={() => {
            postTopics();
          }}
        >
          <Text
            className="text-[#FFFFFF] text-[16px]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
