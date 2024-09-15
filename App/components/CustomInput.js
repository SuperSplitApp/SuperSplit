import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

const CustomInput = ({
  title,
  placeholder,
  autoComplete,
  value,
  setState,
  secure,
}) => {
  const [showSecure, setShowSecure] = useState(false);
  return (
    <View className="w-full px-5 py-4">
      <Text className="py-2 font-inter-semibold">{title}</Text>
      <View className="flex-row w-full border-b-[1px] focus:border-b-[2px] focus:border-emerald-500 py-2 focus:pb-[7px]">
        <TextInput
          secureTextEntry={secure && !showSecure}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="flex-1 font-inter-regular"
          value={value}
          onChangeText={setState}
        />
        {secure && (
          <Pressable onPress={() => setShowSecure((prev) => !prev)}>
            <Text className="px-2 font-inter-medium text-gray-400">
              {showSecure ? "Hide" : "Show"}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
