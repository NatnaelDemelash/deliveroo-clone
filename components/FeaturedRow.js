import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-xl">{title}</Text>
        <ArrowRightIcon fill="#00CCBB" size={20} />
      </View>
      <Text className="text-xs text-gray-500 font-bold px-4">
        {description}
      </Text>
    </View>
  );
};

export default FeaturedRow;
