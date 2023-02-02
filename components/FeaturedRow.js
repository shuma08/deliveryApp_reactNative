import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">
          {title}
        </Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4" >{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl={"https://thumbs.dreamstime.com/b/pizza-slice-5957584.jpg"}
          title={"Yo sushi"}
          raiting={4.5}
          genre={"Japanise"}
          address={"123 Main str"}
          short_description={"Short descr"}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow