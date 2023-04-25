import React, { useState, useEffect, useMemo, createRef } from "react";
import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheet from "reanimated-bottom-sheet";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function TextEditor() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [value, setValue] = useState([""]);
  const [showInput, setShowInput] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [isTouchable, setIsTouchable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = useMemo(() => ["60%", "0%"]);

  const bs = createRef();

  const Data = [
    {
      id: 1,
      topic: "Java Script",
      value: "js",
      icon: "language-javascript",
      color: "gold",
    },
    {
      id: 2,
      topic: "Java",
      value: "java",
      icon: "language-java",
      color: "red",
    },
    {
      id: 3,
      topic: "React Native",
      value: "rn",
      icon: "react",
      color: "#58D3F7",
    },
    {
      id: 4,
      topic: "Kotlin",
      value: "kt",
      icon: "language-kotlin",
      color: "#FE2EF7",
    },

    {
      id: 5,
      topic: "Flutter",
      value: "flutter",
      icon: "alpha-f-box",
      color: "#58D3F7",
    },

    {
      id: 6,
      topic: "Next JS",
      value: "next js",
      icon: "alpha-n-box",
    },

    {
      id: 7,
      topic: "PHP",
      value: "php",
      icon: "language-php",
      color: "#8181F7",
    },

    {
      id: 8,
      topic: "Python",
      value: "py",
      icon: "language-python",
    },
    {
      id: 9,
      topic: "Data Structure",
      value: "ds",
      icon: "alpha-d-box",
    },

    {
      id: 10,
      topic: "GO",
      value: "go",
      icon: "language-go",
      color: "#0000FF",
    },

    {
      id: 11,
      topic: "C-sharp",
      value: ".net",
      icon: "language-csharp",
      color: "green",
    },
    {
      id: 12,
      topic: "IOT",
      value: ".net",
      icon: "devices",
    },
    {
      id: 13,
      topic: "TypeScript",
      value: "ts",
      icon: "language-typescript",
      color: "#0174DF",
    },
    {
      id: 14,
      topic: "React JS",
      value: "react",
      icon: "react",
      color: "#58D3F7",
    },
  ];

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();

    const uploadImage = async()=>{
          
    }

    if(image!=null){
      uploadImage()
      setImage(null)

    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [8, 5],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("error reading an image");
    }
  };
  console.log("image", image);

  const handleSnapPress = async (choosen) => {
    console.log("Start BottomSheet..");

    bs.current.snapTo(0);
  };

  const Item = ({ title, onPress, name, color }) => (
    <View className=" border-b-[0.5px] border-b-[#bcbcbc] w-full">
      <TouchableOpacity onPress={onPress}>
        <View className=" flex-row  items-center p-2 ml-4 ">
          <MaterialCommunityIcons name={name} size={40} color={color} />

          <View>
            <Text
              className="text-[17px] ml-8 text-[#090909]"
              style={{ fontFamily: "Poppins_600SemiBold" }}
            >
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      name={item.icon}
      color={item.color}
      title={item.topic}
      onPress={() => {
        setValue([item.icon, item.topic, item.color]), bs.current.snapTo(1);
      }}
    />
  );
  console.log("Topic Data", value);

  const renderInner = () => (
    <>
      {/* <LinearGradient
        className=" absolute  w-full h-full left-0 right-0 bottom-0 top-2 border-[0.5px] border-[#c5c7c5] rounded-t-3xl"
        colors={["#000000", "#c5c7c5", "#000000"]}
        start={{ x: 0, y: 2 }}
        end={{ y: 0, x: 0.3 }}
      /> */}
      <View className="  w-full h-full left-0 right-0 bottom-0 top-0 border-[0.5px] border-[#131413] rounded-t-3xl bg-[#000000]">
        <View className="flex-grow w-full h-full border-[0.5px] border-[#2a2a2a] px-2 rounded-t-3xl top-2 bg-[#ffffffd8]">
          <View className="mt-2 items-center">
            <View className="w-8 h-1.5 rounded-[10px]"></View>
            <View className=" mb-8 top-2 w-full">
              <FlatList
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="  w-full h-full">
        <LinearGradient
          className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
          colors={["white", "transparent"]}
          start={{ x: 0, y: 5 }}
          end={{ y: 4, x: 0 }}
        />
        <TouchableWithoutFeedback
          className="top-4 ml-4  flex-auto h-12 w-16"
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        >
          <View>
            <Icon name="clear" size={28} color={"#808080"} />
          </View>
        </TouchableWithoutFeedback>

        <ScrollView className=" flex-1 px-6">
          <View className="flex-row mt-16 w-full h-14 space-x-4 ">
            <TouchableOpacity
              className=" flex-row items-center justify-center rounded-[20px] bg-[#D5D5D5] w-[140px] h-[40px] space-x-2 p-2"
              onPress={pickImage}
            >
              <MaterialCommunityIcons name="image" size={22} />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Add Cover
              </Text>
            </TouchableOpacity>
            {showInput === false ? (
              <TouchableOpacity
                className=" flex-row items-center justify-center rounded-[20px] bg-[#D5D5D5] w-[140px] h-[40px]  space-x-2"
                onPress={toggleInput}
              >
                <MaterialCommunityIcons name="plus" size={22} />
                <Text
                  className="text-black text-[13px] top-[1px]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  Add Subtitle
                </Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
          {value == "" ? (
            <TouchableOpacity
              className=" flex-row items-center  rounded-[20px] bg-[#D5D5D5] w-[140px] h-[40px] space-x-2  "
              onPress={handleSnapPress}
            >
              <MaterialCommunityIcons
                name="plus"
                size={20}
                style={{ marginLeft: 10 }}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Choose Topic
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className=" flex-row items-center justify-center rounded-[20px] bg-[#D5D5D5] w-[140px] h-[40px] space-x-2"
              onPress={handleSnapPress}
            >
              <MaterialCommunityIcons
                name={value[0]}
                size={20}
                style={{ marginLeft: 2 }}
                color={value[2]}
              />
              <Text
                className="text-black text-[13px] top-[1px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                {value[1]}
              </Text>
            </TouchableOpacity>
          )}

          {image && (
            <View className=" relative mt-8">
              <Image source={{ uri: image }} className=" w-full h-[184px]" />
              <View className="absolute top-0 right-0">
                <MaterialCommunityIcons
                  className=""
                  name="close-box"
                  size={30}
                  color="#000"
                  onPress={() => {
                    setImage(null);
                  }}
                />
              </View>
            </View>
          )}

          <View className=" mt-8 w-full">
            <TextInput
              placeholder="Article Title"
              placeholderTextColor={"#848484"}
              cursorColor="#000000"
              textColor="#050606"
              activeUnderlineColor="transparent"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              selectionColor={"black"}
              multiline={true}
              style={{
                fontSize: 25,
                fontFamily: "Poppins_600SemiBold",
                backgroundColor: "transparent",
              }}
            />
          </View>
          {showInput && (
            <View className="w-full relative mt-4">
              <TextInput
                placeholder="Article Subtitle"
                placeholderTextColor={"#848484"}
                cursorColor={"#000000"}
                selectionColor={"black"}
                textColor="#050606"
                activeUnderlineColor="transparent"
                activeOutlineColor="transparent"
                multiline={true}
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins_500Medium",
                  backgroundColor: "transparent",
                }}
              />

              <View className="absolute top-1 bottom-0 right-0 ">
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color="#FFFFFF"
                  onPress={() => {
                    setShowInput(!showInput);
                  }}
                />
              </View>
            </View>
          )}

          <View className=" mt-4 ">
            <TextInput
              className="text-[#FFFF]"
              placeholder="Start writing..."
              placeholderTextColor={"#848484"}
              cursorColor={"#000000"}
              selectionColor={"black"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="transparent"
              multiline={true}
              style={{
                fontSize: 19,
                fontFamily: "Poppins_400Regular",
                backgroundColor: "transparent",
              }}
            />
          </View>
        </ScrollView>

        <View className="px-4 items-center bottom-0 ">
          <TouchableOpacity
            className="justify-center items-center bg-[#5C5C5C] rounded-[8px]  w-[350px] h-[46px] bottom-2"
            onPress={() => {
              alert("Publish");
            }}
          >
            <Text
              className="text-[#FFFFFF] text-[16px]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              Publish
            </Text>
          </TouchableOpacity>
        </View>

        <BottomSheet
          ref={bs}
          initialSnap={1}
          snapPoints={snapPoints}
          enabledGestureInteraction={false}
          renderContent={renderInner}
          enabledInnerScrolling={true}

          // onCloseEnd={() => {
          //   setIsOpen(false);
          //   setIsTouchable(false);
          // }}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
