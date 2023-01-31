import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { SafeAreaView, Text, Platform, View, Image, TextInput, } from 'react-native';
import * as Icons from "react-native-heroicons/outline";


const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className={`bg-white pt-8 ${Platform.OS === "android" ? "mt-0" : "mt-0"}`}>
      {/* <Text > */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <Icons.ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <Icons.UserIcon size={35} color="#00CCBB" />
      </View>
      {/* </Text> */}

      {/* Sarch  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
          <Icons.MagnifyingGlassIcon size={15} color="#00CCBB" className={Platform.OS === "android" && "mt-1.5"} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>

        <Icons.AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen