import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  raiting,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded">
      <Image
        source={{
          uri: imgUrl
        }}
        className="h-36 w-64 rounded"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-end space-x-1">
          <StarIcon color="#00CCBB" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-[#00CCBB]">{raiting} </Text>
            - {genre}
          </Text>
        </View>

        <View className="flex-row items-end space-x-1">
          <MapPinIcon color="grey" opacity={0.4} size={22}/>
          <Text className="text-xs text-gray-500">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard