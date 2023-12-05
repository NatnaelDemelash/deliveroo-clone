import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/266/266601.png"
        title="Offer"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/706/706934.png?ga=GA1.1.1524916889.1700998649&semt=ais"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/168/168333.png?ga=GA1.1.1524916889.1700998649&semt=ais"
        title="Susshi"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1161/1161644.png?ga=GA1.1.1524916889.1700998649&semt=ais"
        title="Burger"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/5039/5039186.png?ga=GA1.1.1524916889.1700998649&semt=ais"
        title="Asian"
      />
      <CategoryCard
        imgUrl="https://cdn-icons-png.flaticon.com/128/1365/1365571.png?ga=GA1.1.1524916889.1700998649&semt=ais"
        title="Chicken"
      />
    </ScrollView>
  );
};

export default Categories;
