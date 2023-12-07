import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import { ScrollView } from "react-native";

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
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          title="Nandos"
          imgUrl="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&uid=R115070168&ga=GA1.1.1524916889.1700998649&semt=sph"
          rating={4.5}
          short_description="This is a test description"
          dishes={[]}
          genre="Japanese"
          address="123 Main"
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
