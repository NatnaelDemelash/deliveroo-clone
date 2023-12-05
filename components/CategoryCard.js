import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mx-2 bg-[#9958fbdc] p-2 rounded-md">
      <Image source={{ uri: imgUrl }} className="h-14 w-14 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
