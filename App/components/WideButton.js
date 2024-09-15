import { View, Text, Pressable } from "react-native";
import React from "react";

const WideButton = ({ styles, title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className={`items-center justify-center ${styles} py-3 px-4 w-[60%] rounded-md border-b-2 border-b-slate-400 my-3`}
    >
      <Text className="text-white font-inter-semibold text-base">{title}</Text>
    </Pressable>
  );
};

export default WideButton;
