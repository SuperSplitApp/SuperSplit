import { View, Text, Image } from "react-native";
import React from "react";
import icon from "../assets/cash.png";

const LogoWText = () => {
  return (
    <View>
      <Image source={icon} className="h-36 w-36 my-4" />
      <Text className="font-inter-bold text-2xl">
        Super
        <Text className="text-emerald-500">Split</Text>
      </Text>
    </View>
  );
};

export default LogoWText;
