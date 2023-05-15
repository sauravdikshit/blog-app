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
} from "react-native";
import React, { useState, useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "react-native-paper";

import Form from "../../components/Form/context";
import FormField from "../../components/Form/FormField";
import { SPEC } from "../../specifications/form-field-specs";
import FormSubmit from "../../components/Form/FormSubmit";
import { ScrollView } from "react-native-gesture-handler";
import * as RegistrationApi from "../../api/blogApi";

export default function Signup({ navigation }) {
  const theme = useTheme();
  const [name, setName] = useState("Saurav Kumar");
  const [username, setUserName] = useState("@Saurav");

  const [userEmail, setUserEmail] = useState("sauravkumar937@gmail.com");
  const [userPassword, setUserPassword] = useState("Saurav@0");
  const [confirmPassword, setConfirmPassword] = useState("Saurav@0");
  const [hidePass, setHidePass] = useState(true);
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

  const registerUser = async (data) => {
    try {
      const response = await RegistrationApi.userRegistration({
        name: name,
        username: username,
        email: userEmail,
        password: confirmPassword,
      });
      if (response.data.message == "Registered Successfully!") {
        navigation.navigate("Login");
        Alert.alert(response.data.message);
      } else {
        console.log("Something is wrrong");
      }
      console.log(response.data);
    } catch (error) {
     
        console.log(error);
    
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className=" w-full h-full">
        <View className="absolute w-full h-full flex flex-col justify-between top-0">
          <Image
            className="w-full h-full"
            source={require("../../assets/student.jpg")}
          />
        </View>
        <LinearGradient
          className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
          colors={["rgba(0,0,0,8)", "#000a", "rgba(0,0,0,8)"]}
          start={{ x: 3, y: 1 }}
          end={{ y: -1, x: 2 }}
        />

        <ScrollView className="bottom-8">
          <View className="absolute w-full h-full flex flex-col justify-between top-0">
            <View className="flex justify-center items-center h-4/6">
              <Image
                className="w-[80px] h-[90px] mb-40"
                source={require("../../assets/icon-blog.png")}
              />
            </View>
          </View>

          <View className=" relative items-center mt-80 ">
            <Form>
              <FormField
                required
                keyboardType="default"
                placeholder="Full Name"
                mode="outlined"
                iconLeft="account"
                value={name}
                onChangeText={setName}
                className="mt-8 px-4"
                limit={18}
                validations={nameValidations}
              />
              <FormField
                required
                keyboardType="default"
                placeholder="@Username"
                mode="outlined"
                iconLeft="at"
                editable
                value={username}
                onChangeText={setUserName}
                className="mt-4 px-4"
                limit={18}
                validations={userNameValidations}
              />
              <FormField
                required
                keyboardType="default"
                placeholder="Email"
                mode="outlined"
                iconLeft="email"
                editable
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
              <FormField
                keyboardType="default"
                placeholder="Confirm Password"
                mode="outlined"
                iconLeft="form-textbox-password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                className="mt-4 px-4"
                limit={16}
                validations={passwordValidations}
                secureTextEntry={hidePass ? true : false}
                icon="eye"
                onPress={() => setHidePass(!hidePass)}
              />
              <FormSubmit
                className="justify-center items-center bg-[#808080]  rounded-[8px] w-[360px] h-[46px] mt-4 px-4"
                mode="contained"
                onPress={() => {
                  if (userPassword === confirmPassword) {
                    registerUser();
                  } else {
                    alert("Password is not match");
                  }
                }}
              >
                <Text
                  className="text-[#FFFFFF] text-[16px]"
                  style={{ fontFamily: "Poppins_500Medium" }}
                >
                  SIGNUP
                </Text>
              </FormSubmit>
              {/* <Button
            className="bg-green-600 rounded-full top-8 h-12 bottom-8 m-20 justify-center"
            onPress={() => {
              navigation.navigate("Login" ,{name:name})
            }}
          >
            <Text className="text-white text-base">send data</Text>
          </Button> */}
            </Form>
          </View>
        </ScrollView>
        <View className="px-4 mb-4">
          <View className="flex-row justify-between">
            <Text
              className="text-white text-[14px]"
              style={{ fontFamily: "Poppins_500Medium" }}
            >
              Forgot Password
            </Text>

            <Pressable
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                className="text-white font-bold text-[14px]"
                style={{ fontFamily: "Poppins_500Medium" }}
              >
                Sign in ?
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
