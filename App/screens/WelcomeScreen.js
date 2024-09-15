import { View, Text, Pressable, Linking, Platform } from "react-native";
import React, { useLayoutEffect } from "react";
import WideButton from "../components/WideButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import LogoWText from "../components/LogoWText";

const WelcomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLinkPress = () => {
    Linking.openURL("https://www.github.com/AzeemIdrisi");
  };
  return (
    <View className="justify-center items-center flex-1 w-full">
      <View className="flex-1 justify-end items-center w-full">
        <LogoWText />
      </View>
      <View className="flex-1 w-full items-center py-10">
        <View className="flex-1 w-full items-center justify-center">
          <WideButton
            styles={"bg-emerald-500 active:bg-emerald-700"}
            onPress={() => navigation.navigate("Signup")}
            title="Sign up"
          />
          <WideButton
            styles={"bg-neutral-700 active:bg-neutral-500"}
            onPress={() => navigation.navigate("Login")}
            title="Log in"
          />
        </View>
        <View className="flex-1 items-center justify-start">
          <Pressable
            onPress={handleLinkPress}
            className="flex-row items-center justify-center"
          >
            <EvilIcons name="sc-github" size={32} color="gray" />
            <Text
              className={`text-gray-500 font-inter-semibold pt-${
                Platform.OS === "ios" ? "1" : "2"
              }`}
            >
              GitHub
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
