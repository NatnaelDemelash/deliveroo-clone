import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container} className="flex-1 bg-white pt-3">
      {/* HEADER */}
      <View className="flex-row space-x-2 items-center pb-2 mx-4">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/4750/4750252.png",
          }}
          className="h-6 w-6 p-5 bg-slate-200 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="font-bold text-lg">Current Loaction</Text>
            <ChevronDownIcon fill="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>

        <UserCircleIcon fill="#00CCBB" size={25} />
      </View>

      {/* SERACHBAR */}
      <View className="flex-row items-center mb-2 px-2">
        <View className="bg-gray-200 flex-1 flex-row space-x-2 mx-4 px-4 py-2 rounded-md">
          <MagnifyingGlassIcon fill="grey" />
          <TextInput
            placeholder="Restaurants and Cusines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={24} fill="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placement from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone been enjoying these jucy discount"
        />
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Why not support your local resturant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? "" : 30,
  },
});

export default HomeScreen;
