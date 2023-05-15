import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Appbar, Divider, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconMat from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Pressable } from "react-native";
import { storage } from "../../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as ImageManipulator from "expo-image-manipulator";
import * as updateProfileData from '../../api/blogApi'

export default function ProfileSettings({ navigation }) {
  const [showBasicInput, setBasicInput] = useState(false);
  const [showAboutInput, setAboutInput] = useState(false);
  const [showSocialInput, setSocialInput] = useState(false);
  const [showProfileInput, setProfileInput] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [downloadImage, setDownloadImage] = useState(null);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [tagLine,setTagLine] = useState("")
  const [location,setLocation] = useState("")
  const [about,setAbout] = useState("")
  const [skills,setSkills] = useState("")
  const [twitter,setTwitter] = useState("")
  const [linkedin,setLinkiden] = useState("")
  const [github,setGithub] = useState("github.com")
  const [stackoverflow,setStackoverflow] = useState("")
  const [website,setWebsite] = useState("")

  const [userName,setUserName] = useState("")
  const [alternateEmail,setAlternateEmail] = useState("")

  


  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();

    if (image != null) {
      uploadImage();
    }
  }, [image]);

  const uploadImage = async () => {
    setUploading(true);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request faild"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/png",
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "ArticleCover/" + Date.now());
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          setDownloadImage(downloadURL);
          setUploading(false);
        });
      }
    );
  };

  //   const pickImage = async () => {
  //       let result = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         allowsEditing: true,
  //         aspect: [4, 3],
  //         quality: 1,
  //       });

  //       console.log(result);

  //       if (!result.canceled) {
  //         setImage(result.uri);
  //       }
  //     };
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality:1,
      });

      if (!result.canceled) {
        const processedImage = await ImageManipulator.manipulateAsync(
          result.uri,
          [
            {
              crop: {
                originX: 0,
                originY: 0,
                width: result.width,
                height: result.height,
              },
            },
          ],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
        );
        const croppedImage = await ImageManipulator.manipulateAsync(
          processedImage.uri,
          [{ resize: { width: 200, height: 200 } }],
          { format: ImageManipulator.SaveFormat.PNG }
        );
        setImage(croppedImage.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  console.log("image", image);

  const toggleInput = () => {
    setBasicInput(!showBasicInput);
  };
  const toggleAboutInput = () => {
    setAboutInput(!showAboutInput);
  };
  const toggleSocialInput = () => {
    setSocialInput(!showSocialInput);
  };
  const toggleProfileInput = () => {
    setProfileInput(!showProfileInput);
  };



  const updateProfile = async () => {
      try {
        const response = await updateProfileData.updateProfile({
   

          name:fullName,
          profile_tagline:tagLine,
          bio:about,
          user_website:website,
          user_stack:stackoverflow,
          user_github:github,
          user_linkedin:linkedin,
          user_twitter:twitter,
          user_location:location,
          alter_email:alternateEmail,
          profileimage:downloadImage,
          username:userName
            
        });
     
        if (response.data) {
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
          navigation.navigate("MainProfile");
       
        } else {
          console.log("Something is wrrong");
        }
       
            } catch (error) {
        console.log(error)
      }
    };


  return (
    <SafeAreaView className="w-full h-full bg-[#F5F5F5]">
      <Appbar.Header className="bg-[#F5F5F5] space-x-6 h-14">
        <Icon
          name="keyboard-backspace"
          size={27}
          color={"black"}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title="Profile Settings"
          titleStyle={{ fontFamily: "Poppins_500Medium", fontSize: 18 }}
        />
      </Appbar.Header>
      <ScrollView>
        <View className="  items-center mt-8">
          <Pressable
            onPress={() => {
              pickImage();
            }}
          >
            {uploading ? (
              <View className="rounded-full border-[#000000] w-[160px] h-[160px] border-[1.5px]  justify-center">
                <ActivityIndicator size={"large"} color={"#848484"} />
              </View>
            ) : (
              <View className="border-[1.5px] border-[#000000] rounded-full">
                <Image
                  className="  rounded-full w-[160px] h-[160px]"
                  source={{ uri: image }}
                />
              </View>
            )}

            {/* <Icon className="" name="edit" size={20} /> */}
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            toggleInput();
          }}
        >
          <View className="px-4 mt-6">
            <View className="flex-row justify-between items-center">
              <Text
                className="text-[22px]"
                style={{ fontFamily: "Poppins_600SemiBold" }}
              >
                Basic Info
              </Text>
              {showBasicInput == false ? (
                <Icon name="arrow-forward-ios" size={20} color="gray" />
              ) : (
                <Icon name="keyboard-arrow-down" size={35} color="gray" />
              )}
            </View>
          </View>
        </Pressable>
        <Divider />
        {showBasicInput == true ? (
          <View className="px-4 mt-2">
            <TextInput
              placeholder="Full Name"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="Profile Tagline"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={tagLine}
              onChangeText={(tagLine) => setTagLine(tagLine)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="Location"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={location}
              onChangeText={(location) => setLocation(location)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />
          </View>
        ) : (
          <></>
        )}

        <Pressable
          onPress={() => {
            toggleAboutInput();
          }}
        >
          <View className="px-4 mt-6">
            <View className="flex-row justify-between items-center">
              <Text
                className="text-[22px]"
                style={{ fontFamily: "Poppins_600SemiBold" }}
              >
                About You
              </Text>
              <Icon name="arrow-forward-ios" size={20} color="gray" />
            </View>
          </View>
        </Pressable>
        <Divider />
        {showAboutInput == true ? (
          <View className="px-4 mt-2">
            <TextInput
              className="h-40"
              placeholder="I am a developer from..."
              mode="outlined"
              placeholderTextColor={"#848484"}
              multiline={true}
              value={about}
              onChangeText={(about) => setAbout(about)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="Skills"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={skills}
              onChangeText={(skills) => setSkills(skills)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <Pressable
          onPress={() => {
            toggleSocialInput();
          }}
        >
          <View className="px-4 mt-6">
            <View className="flex-row justify-between items-center">
              <Text
                className="text-[22px]"
                style={{ fontFamily: "Poppins_600SemiBold" }}
              >
                Socials
              </Text>
              <Icon name="arrow-forward-ios" size={20} color="gray" />
            </View>
          </View>
        </Pressable>
        <Divider className="" />

        {showSocialInput == true ? (
          <View className="px-4 mt-2">
            <TextInput
              placeholder="https://twitter.com/kali"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={twitter}
              onChangeText={(twitter) => setTwitter(twitter)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="https://github.com/kali"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={github}
              onChangeText={(github) => setGithub(github)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="https://linkedin.com/in/kali"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={linkedin}
              onChangeText={(linkedin) => setLinkiden(linkedin)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />
            <TextInput
              className="mt-2"
              placeholder="https://kali.com"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={website}
              onChangeText={(website) => setWebsite(website)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="https://stackoverflow.com/users/10810/kali-dev"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={stackoverflow}
              onChangeText={(stackoverflow) => setStackoverflow(stackoverflow)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <Pressable
          onPress={() => {
            toggleProfileInput();
          }}
        >
          <View className="px-4 mt-6 bottom-2">
            <View className="flex-row justify-between items-center">
              <Text
                className="text-[22px]"
                style={{ fontFamily: "Poppins_600SemiBold" }}
              >
                Profile Identity
              </Text>
              <Icon name="arrow-forward-ios" size={20} color="gray" />
            </View>
          </View>
        </Pressable>
        <Divider className="bottom-2" />

        {showProfileInput == true ? (
          <View className="px-4 mt-2 bottom-4">
            <Text
              className="text-[15px] top-2"
              style={{ fontFamily: "Poppins_400Regular_Italic" }}
            >
              You can change username once.This is the last chance.
            </Text>

            <TextInput
              placeholder="@sauravdikshit"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={userName}
              onChangeText={(userName) => setUserName(userName)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />

            <TextInput
              className="mt-2"
              placeholder="sauravkumar937@gmail.com"
              mode="outlined"
              placeholderTextColor={"#848484"}
              value={alternateEmail}
              onChangeText={(alternateEmail) => setAlternateEmail(alternateEmail)}
              cursorColor={"#000000"}
              textColor="#050606"
              activeUnderlineColor="transparent"
              activeOutlineColor="#848484"
              style={{
                fontSize: 17,
                fontFamily: "Poppins_500Medium",
                backgroundColor: "transparent",
              }}
            />
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
      <View className="items-center mt-2">
        <TouchableOpacity
          className="justify-center items-center bg-[#5C5C5C] rounded-[8px] w-[365px] h-[46px] bottom-2"
          onPress={() => {
           updateProfile()
          }}
        >
          <Text
            className="text-[#FFFFFF] text-[16px]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
