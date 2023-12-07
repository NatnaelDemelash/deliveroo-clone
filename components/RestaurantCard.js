import { View } from "react-native";
import { Image, TouchableOpacity, Text } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  short_description,
  genre,
  rating,
  address,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded-md">
      <Image source={{ uri: imgUrl }} className="h-36 w-56 rounded-sm" />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon fill="green" size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-400">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs">Near by - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
