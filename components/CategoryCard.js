import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mx-2 bg-[#D4E6F1] p-2 rounded-md">
      <Image source={{ uri: imgUrl }} className="h-12 w-12 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold ">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
