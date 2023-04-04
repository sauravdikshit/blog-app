import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";

// import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    key: 1,
    title: "Read the best\nstories from the\nDev Community",

    image: require("../assets/intro3.json"),
  },
  {
    key: 2,
    title: "Connect with\nskilled devs from\naround the world",
    image: require("../assets/software-development.json"),
    backgroundColor: "#FFFFFF",
  },
  {
    key: 3,
    title: "Share your\nknowledge by\npublishing great\narticles",
    text: "Lorem ipsum dolor sit amet,\n\n consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Ut enim ad minim veniam, quis ",
    image: require("../assets/intro1.json"),
    backgroundColor: "#FFFFFF",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", width }}>
      {/* <Image source={item.image} style={styles.introImageStyle} /> */}
      <LottieView
        source={item.image}
        autoPlay
        loop
        style={{ width: 230, height: 230 }}
      />

      <View className="mt-10">
        <Text
          className="text-center text-2xl text-[#FFFFFF]"
          style={{ fontFamily: "Poppins_700Bold" }}
        >
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default function Intro({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  var currentIndex = 0;
  const Footer = () => {
    return (
      <View className="flex-1 justify-center items-center mb-10 mt-6">
        <View className="justify-center px-20">
          <View className="flex-row justify-center mb-60">
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,

                  currentSlide == index && {
                    backgroundColor: "#5C5C5C",
                    width: 15,
                  },
                ]}
              ></View>
            ))}
          </View>
        </View>

        <View className=" w-full mb-28 px-4 items-center">
          <TouchableOpacity
            className="justify-center items-center bg-[#5C5C5C] rounded w-[350px] h-[46px]"
            onPress={goToNextSlide}
          >
            <Text
              className="text-[#FFFFFF] text-[16px]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const ref = useRef();
  const updateCurrentSlide = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlide(currentIndex);
    console.log(currentSlide);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlide + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView className="flex 1 h-full w-full bg-[#000000]">
      <StatusBar backgroundColor={"#FFFFFF"} />
      <FlatList
        style={{ marginTop: "20%" }}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlide}
        pagingEnabled
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => <Slide item={item} />}
      ></FlatList>
      <Footer />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  indicator: {
    height: 9,
    width: 9,
    backgroundColor: "#d9d9d9",
    marginHorizontal: 7,
    borderRadius: 10,
  },
});
