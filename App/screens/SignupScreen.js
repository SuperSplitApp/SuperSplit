import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import WideButton from "../components/WideButton";

const SignupScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sign up",
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : null}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 70}
    >
      <ScrollView className="flex-1">
        <View className="items-center justify-center py-10">
          <CustomInput
            autoComplete={"email"}
            title={"Email Address"}
            placeholder={"Your email address"}
            value={email}
            setState={setEmail}
          />
          <CustomInput
            autoComplete={"password"}
            title={"New Password"}
            placeholder={"Your new password"}
            value={password}
            setState={setPassword}
            secure
          />
          <WideButton
            styles={"bg-emerald-500 active:bg-emerald-700"}
            onPress={() => navigation.navigate("Welcome")}
            title="Next"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
