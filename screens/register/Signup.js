import {
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable
} from "react-native";
import React ,{useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";


export default function Signup({navigation}) {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [hidePass, setHidePass] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex flex-1 "
    >
      <SafeAreaView className="w-full h-full">

        <View className="relative justify-center ">
        
          <Image
            className="w-full h-full"
            source={require("../../assets/student.jpg")}
          />
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,8)", "#000a", "rgba(0,0,0,8)"]}
            className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
          />

          <View className="absolute w-full h-full flex flex-col justify-between top-0">
            <View className="flex justify-center items-center h-4/6">
              <Image
                className="w-24 h-28 mt-2"
                source={require("../../assets/icon-blog.png")}
              />
            </View>
            <View className="self-center  bottom-24" style={{height: 300}}>
              <View className="items-center   gap-4 ">
              <TextInput
                  
                  className="w-[350px]"
                  outlineStyle={{
                    borderColor: "transparent",
                    borderRadius:8
                  }}
                  left={<TextInput.Icon icon={"account"} />}
                  editable
                  mode="outlined"
                  placeholder="Username"
                />
                <TextInput
                  
                  className="w-[350px]"
                  outlineStyle={{
                    borderColor: "transparent",
                    borderRadius:8
                  }}
                  left={<TextInput.Icon icon={"email"} />}
                  editable
                  mode="outlined"
                  placeholder="Email"
                />
                <TextInput
                  
                  className="w-[350px]"
                  outlineStyle={{
                    borderColor: "transparent",
                    borderRadius:8
                  }}
                  secureTextEntry={hidePass ? true : false}
                  right={<TextInput.Icon icon={"eye"}
                  onPress={() => setHidePass(!hidePass)} />}
                  editable
                  mode="outlined"
                  placeholder="Password"
                />
              
             
                 <TouchableOpacity
                  className="justify-center items-center bg-[#5C5C5C] rounded-[8px] w-[350px] h-[46px]"
                  onPress={()=>{navigation.navigate("Topics")}}
                >
                  <Text
                    className="text-[#FFFFFF] text-[16px]"
                    style={{ fontFamily: "Poppins_500Medium" }}
                  >
                   Sign Up
                  </Text>
                </TouchableOpacity>

               
              </View>
              <View className="flex-row justify-between mt-20">
                <Text className="text-white text-[14px]" style={{ fontFamily: "Poppins_500Medium" }}>Forgot Password</Text>

                <Pressable  onPress={()=>{navigation.navigate("Login")}}>
                <Text className="text-white font-bold text-[14px]" style={{ fontFamily: "Poppins_500Medium" }}>Sign in ?</Text>

                </Pressable>
               
              </View>
            </View>
          </View>
        </View>

      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
