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
  const [focused, setFocused] = useState(false);
  return (
    <View className="w-full px-5 py-4">
      <Text className="py-2 font-inter-semibold">{title}</Text>
      <View
        className={`flex-row w-full border-b-[1px] py-2 ${
          focused && "pb-[6] border-b-[2px] border-emerald-500"
        }`}
      >
        <TextInput
          secureTextEntry={secure && !showSecure}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="flex-1 font-inter-regular"
          value={value}
          onChangeText={setState}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
