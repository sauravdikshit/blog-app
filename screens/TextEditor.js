import React, { useState, useEffect } from "react";
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
} from "react-native";
import { TextInput ,useTheme} from "react-native-paper";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";

export default function TextEditor() {
  const theme = useTheme();
  const [showInput, setShowInput] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const toggleInput = () => {
    setShowInput(!showInput);
  };

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  //   const imageDir = FileSystem.cacheDirectory + "Article/";
  //   const imageFileUri = (imageName) =>
  //     imageDir + `Article_${imageName}_post.png`;

  //   async function ensureDirExists() {
  //     const dirInfo = await FileSystem.getInfoAsync(imageDir);
  //     if (!dirInfo.exists) {
  //       console.log("Image directory doesn't exist, creating...");
  //       await FileSystem.makeDirectoryAsync(imageDir, { intermediates: true });
  //     }
  //   }

  //   const getSingleImage = async (imageName, imageId) => {
  //     try {
  //       await ensureDirExists();

  //       const fileUri = imageFileUri(imageName);
  //       const fileInfo = await FileSystem.getInfoAsync(fileUri);

  //       if (!fileInfo.exists) {
  //         // console.log("Image isn't cached locally. Downloading...");

  //         let options = {
  //           from: imageId,
  //           to: fileUri,
  //         };
  //         await FileSystem.copyAsync(options);
  //       }

  //       return fileUri;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //  const pickImage = async () => {

  //     const galleryStatus =
  //     await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (!galleryStatus.granted) {
  //     Alert.alert("Permission denied");
  //   }

  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //       base64:true,

  //     });
  //     var imageSize = result.base64.length * (3 / 4) - 2;

  //     if (!result.canceled) {
  //       console.log(imageSize, "imageSize");
  //       if (imageSize < 3000000) {
  //         const manipResult = await ImageManipulator.manipulateAsync(
  //            result.assets,
  //           [{ resize: { height: 1000, width: 1000 } }],
  //           { compress: 1, format: ImageManipulator.SaveFormat.PNG }
  //         );
  //         let imagefile = await getSingleImage(Date.now(), manipResult.uri);
  //         console.log(imagefile, "myimageFile");

  //         setImage(imagefile);
  //       } else {
  //         Alert.alert("File is too large! MAX-SIZE is 1MB ");
  //       }
  //     }
  //   };

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
  console.log("image" ,image)


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex flex-1"
    >
      <SafeAreaView className=" w-full h-full bg-[#EBEBEB]">
        <ScrollView className=" flex-1 px-6">
          <View className="mt-14 left-64 ">
            <TouchableOpacity className="h-[32px] w-[75px] bg-black rounded-[10px] items-center justify-center p-[5px]">
              <Text
                className="text-white text-[14px]  "
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Publish
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row mt-12 w-full h-14  space-x-6">
            <TouchableOpacity
              className=" flex-row items-center justify-center rounded-[20px] bg-[#D5D5D5] w-[120px] h-[35px] space-x-2 "
              onPress={pickImage}
            >
              <MaterialCommunityIcons name="image" size={18} />
              <Text
                className="text-black text-[13px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Add Cover
              </Text>
            </TouchableOpacity>
            {showInput === false ? (
              <TouchableOpacity
              className=" flex-row items-center justify-center rounded-[20px] bg-[#D5D5D5] w-[134px] h-[35px] space-x-2"
              onPress={toggleInput}
            >
              <MaterialCommunityIcons name="plus" size={18} />
              <Text
                className="text-black text-[13px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Add subtitle
              </Text>
            </TouchableOpacity>
            ):(<></>)}
          
          </View>
          {/* {image  !=  null ? (
        <View className="mt-2">
        <Image
          className=" w-full h-[184px]"
          source={{
              uri: image,
            }}
        />
      </View>
       ):(<></>)} */}
          {image && (
            <View className=" relative ">
            <Image source={{ uri: image }} className=" w-full h-[184px]" />
            <View className="absolute top-0 right-0">
            <MaterialCommunityIcons className="" name="close-box" size={30} color="#FFFFFF" onPress={()=>{setImage(null)}}/>

            </View>
           

            </View>
           
          )}

          <View className=" mt-4 w-full">
            <TextInput
            
              placeholder="Article Title.."
              cursorColor="#000000"
              textColor="#000000"
              multiline={true}

              style={{ fontSize: 30, fontFamily: "Poppins_600SemiBold",backgroundColor:"transparent"}}
            />
          </View>
          {showInput && (
            <View className="w-full relative mt-4">

          
          
              <TextInput
                
                placeholder="Article Subtitle"
                cursorColor="#000000"
                textColor="#000000"
                multiline={true}

                style={{ fontSize: 25, fontFamily:"Poppins_500Medium",backgroundColor:"transparent"}}
              
              />
              
          
            <View className="absolute top-0 bottom-0 right-0">
            <MaterialCommunityIcons className="" name="close" size={20} color="#000000" onPress={()=>{setShowInput(!showInput)}}/>

            </View>
           
            </View>
          )}

          <View className=" mt-4">
            <TextInput
              // className="h-60"

              placeholder="Start writing"
              cursorColor={"#000000"}
              textColor="#000000"
              multiline={true}
              style={{ fontSize: 22, fontFamily: "Poppins_400Regular",backgroundColor:"transparent" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
