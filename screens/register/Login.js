import {
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
  Pressable,
  Touchable,
} from "react-native";
import React, { useState, useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Divider, useTheme } from "react-native-paper";

import Form from "../../components/Form/context";
import FormField from "../../components/Form/FormField";
import { SPEC } from "../../specifications/form-field-specs";
import FormSubmit from "../../components/Form/FormSubmit";
import { ScrollView } from "react-native-gesture-handler";
import * as loginApi from "../../api/blogApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("sauravkumar937@gmail.com");
  const [userPassword, setUserPassword] = useState("Saurav@0");

  const [confhidePass, setConfHidePass] = useState(true);

  const nameValidations = useMemo(
    () => [SPEC.NAME_REQUIRED, SPEC.NAME_VALID],
    []
  );

  const emailValidations = useMemo(() => [
    SPEC.EMAIL_REQUIRED,
    SPEC.EMAIL_FORMAT_INVALID,
  ]);
  const userNameValidations = useMemo(() => [
    SPEC.USERNAME_REQUIRED,
    SPEC.USERNAME_VALID,
  ]);
  const passwordValidations = useMemo(() => [
    SPEC.PASSWORD_REQUIRED,
    SPEC.PASSWORD_FORMAT_INVALID,
  ]);

  const loginUser = async (data) => {
    try {
      const response = await loginApi.userLogin({
        email: userEmail,
        password: userPassword,
      });
      if (response.data.message == "Login Successfully!") {
        Alert.alert(response.data.message);
        navigation.navigate("Topics");
      } else {
        Alert.alert("Something is wrong");
      }
      console.log(response.data);

      console.log("@Token", response.data.accessToken);
      var userToken = response.data.accessToken

      await   AsyncStorage.setItem('authToken',userToken)
    } catch (error) {
      if (error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <SafeAreaView className="w-full h-full flex flex-1">
        <View className="absolute w-full h-full flex flex-col justify-between top-0">
          <Image
            className="w-full h-full"
            source={require("../../assets/student.jpg")}
          />
        </View>
        <LinearGradient
          className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 flex-1 "
          colors={["rgba(0,0,0,8)", "#000a", "rgba(0,0,0,8)"]}
          start={{ x: 3, y: 1 }}
          end={{ y: -1, x: 2 }}
        />
        <ScrollView className="bottom-8">
          <View className="absolute w-full h-full flex flex-col justify-between top-0">
            <View className="flex justify-center items-center h-4/6">
              <Image
                className="w-[80px] h-[90px] mb-10"
                source={require("../../assets/icon-blog.png")}
              />
            </View>
          </View>

          <View className=" relative items-center mt-96 ">
            <Form>
              <FormField
                required

                keyboardType="default"
                placeholder="Email Address or Username"
                mode="outlined"
                editable
                iconLeft="email"
                value={userEmail}
                onChangeText={setUserEmail}
                className="mt-4 px-4"
                validations={emailValidations}
              />
              <FormField
                keyboardType="default"
                placeholder="Password"
                mode="outlined"
                iconLeft="form-textbox-password"
                value={userPassword}
                onChangeText={setUserPassword}
                className="mt-4 px-4"
                limit={16}
                validations={passwordValidations}
                secureTextEntry={confhidePass ? true : false}
                icon="eye"
                onPress={() => setConfHidePass(!confhidePass)}
              />

              <FormSubmit
                className="justify-center items-center bg-[#808080]  rounded-[8px] w-[360px] h-[46px] mt-4 px-4"
                mode="contained"
                onPress={() => {
                  loginUser();
                  // navigation.navigate("Topics");
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[16px]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  Sign In
                </Text>
              </FormSubmit>
            </Form>
          </View>
          <Divider className="top-8" />
          <Text
            className="text-[#fff] self-center  text-[16px] top-12"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
           or signin with
          </Text>

          <View className="  p-14  top-4">
            <View className="flex-row justify-between items-center">
              <Image
                className="w-12 h-12"
                source={require("../../assets/google.png")}
              />
              <Image
                className="w-14 h-14"
                source={require("../../assets/facebook.png")}
              />
              <Image
                className="w-14 h-14"
                source={require("../../assets/github.png")}
              />
              <Image
                className="w-12 h-12"
                source={require("../../assets/apple-logo.png")}
              />
            </View>
          </View>
        </ScrollView>

        <View className="bottom-8 px-4">
          <View className="flex-row  justify-between  ">
            <Text
              className="text-white text-[14px]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              Forgot Password
            </Text>
            <Pressable
              onPress={() => {
                navigation.navigate("Signup")             }}
            >
              <Text
                className="text-white font-bold text-[14px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Sign Up?
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
