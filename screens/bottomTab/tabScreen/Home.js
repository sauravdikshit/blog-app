import {
  View,
  Text,
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";

import { FAB } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Latest from "../topTabScreen/Latest";

import Angular from "../topTabScreen/Angular";
import AWS from "../topTabScreen/AWS";
import Coding from "../topTabScreen/Coding";
import DataStructure from "../topTabScreen/DataStructure";
import Flutter from "../topTabScreen/Flutter";
import Java from "../topTabScreen/Java";
import JavaScript from "../topTabScreen/JavaScript";
import Next from "../topTabScreen/Next";
import NodeJS from "../topTabScreen/NodeJS";
import Php from "../topTabScreen/Php";
import Python from "../topTabScreen/Python";
import ReactJs from "../topTabScreen/ReactJs";
import ReactNative from "../topTabScreen/ReactNative";
import TypeScript from "../topTabScreen/TypeScript";
import Kotlin from "../topTabScreen/Kotlin";
import Csharp from "../topTabScreen/Csharp";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import CustomTabBar from "../../../components/CustomTabBar";
import * as tabTopicsData from "../../../api/blogApi";
import Go from "../topTabScreen/Go";
import Iot from "../topTabScreen/Iot";
import All from "../topTabScreen/All";

const screenWidth = Dimensions.get("window").width;

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
  // const [sliderPosition, setSliderPosition] = useState(0);
  // const [selectedTab, setSelectedTab] = useState(0);
  // const tabRefs = useRef([]);
  const { width } = useWindowDimensions();
  // const [selectedTab, setSelectedTab] = useState(0);

  const [activeTab, setActiveTab] = useState(null);
  const [tabsData, setTabsData] = useState([
    //  {"id": 1,    "name": "Latest","component":"Latest"},
    //   {    "id": 2,    "name": "Tech","component":"Tech"},
    //   {"id": 3,    "name": "Angular","component":"Latest"},
    //   {"id": 13,    "name": "AWS","component":"AWS"},
    //   {    "id": 4,    "name": "DataStructure","component":"DataStructure"},
    //   {"id": 5,    "name": "Flutter","component":"Flutter"},
    //   {    "id": 6,    "name": "React Native","component":"ReactNative"},
    //   {"id": 7,    "name": "Latest","component":"Latest"},
    //   {    "id": 8,    "name": "Tech","component":"Tech"},
    //   {"id": 9,    "name": "Angular","component":"Latest"},
    //   {    "id": 10,    "name": "Data Structure","component":"DataStructure"},
    //   {"id": 11,    "name": "Flutter","component":"Flutter"},
    //   {    "id": 12,    "name": "React Native","component":"ReactNative"},
  ]);

  useEffect(() => {
    getTabTopicsData();
  }, []);

  const getTabTopicsData = async () => {
    try {
      const response = await tabTopicsData.getTabTopics();
      console.log("=============User Topics=======================");
      console.log(response.data);
      console.log("=============User Topics=======================");

      setTabsData(response.data);
      setActiveTab(response.data[0].id)

    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };
  console.log("===============activeTab=====================");
      console.log(activeTab);
      console.log("====================================");

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    const activeTabData = tabsData.find((tab) => tab.id === activeTab);
    if (activeTabData && activeTabData.topic) {
      const Component = getComponent(activeTabData.topic);
      return <Component />;
    }
    return null
    // <View className="top-32" style={{ alignItems: "center" }}>
    // <LottieView
    //     source={require("../../../assets/error-404-page-not-found.json")}
    //     autoPlay
    //     loop
    //     style={{ width: 250, height: 250 }}
    //   />
      
    // </View>;
  };

  const getComponent = (componentName) => {
    switch (componentName) {
      case "Latest":
        return Latest;
        case "All":
          return All;  

      case "Angular JS":
        return Angular;
      case "AWS":
        return AWS;
      case "Coding":
        return Coding;
      case "Data Structure":
        return DataStructure;
      case "Flutter":
        return Flutter;
      case "Java":
        return Java;
      case "Java Script":
        return JavaScript;
      case "Next JS":
        return Next;
      case "Node JS":
        return NodeJS;
      case "PHP":
        return Php;
      case "Python":
        return Python;
      case "React JS":
        return ReactJs;
      case "React Native":
        return ReactNative;
      case "TypeScript":
        return TypeScript;
      case "Kotlin":
        return Kotlin;
      case "C-sharp":
        return Csharp;
      case "GO":
        return Go;
      case "IOT":
        return Iot;
      default:
        return Latest;
    }
  };

  return (
    <SafeAreaView className="  w-full h-full bg-[#F5F5F5]">
      <LinearGradient
        className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
        colors={["#0000", "#000", "#0000"]}
        start={{ x: -6, y: 3 }}
        end={{ y: 0, x: 3.7 }}
      />
      <View className="flex-row px-4 top-2  items-center justify-between">
        <TouchableOpacity
          className="w-8 h-12 items-center justify-center"
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <MaterialCommunityIcons name="menu" size={27} color={"#FFFF"} />
        </TouchableOpacity>

        <Image
          className="w-60 h-12"
          resizeMode="center"
          source={require("../../../assets/icon-blog.png")}
        />
        <MaterialCommunityIcons
          name="bell"
          size={25}
          color={"#FFFFFF"}
          onPress={() => {
            alert("notification");
          }}
        />
      </View>

      <View className="flex-1">
        <CustomTabBar
          tabsData={tabsData}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />

        {renderTabContent()}
      </View>

      {/* <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    
    
        <Tab.Screen name="Latest" component={Latest} />
        <Tab.Screen name="Tech" component={Tech} />
        <Tab.Screen name="Angular" component={Angular} />
        <Tab.Screen name="AWS" component={AWS} />
        <Tab.Screen name="Coding" component={Coding} />
        <Tab.Screen name="DataStructure" component={DataStructure} />
        <Tab.Screen name="Flutter" component={Flutter} />
        <Tab.Screen name="Java" component={Java} />
        <Tab.Screen name="JavaScript" component={JavaScript} />
        <Tab.Screen name="Next" component={Next} />
        <Tab.Screen name="NodeJS" component={NodeJS} />
        <Tab.Screen name="Php" component={Php} />
        <Tab.Screen name="Python" component={Python} />
        <Tab.Screen name="ReactJs" component={ReactJs} />
        <Tab.Screen name="ReactNative" component={ReactNative} />
        <Tab.Screen name="TypeScript" component={TypeScript} />
      </Tab.Navigator> */}

      <FAB
        className="absolute right-0 bottom-10 m-8 rounded-full bg-[#0b0605]"
        elevation={2}
        customSize={60}
        icon="plus"
        color="white"
        onPress={() => navigation.navigate("TextEditor")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 8,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
