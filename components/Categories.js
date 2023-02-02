import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://media.istockphoto.com/id/497022342/photo/japanese-restaurant-sushi-dish.jpg?s=612x612&w=0&k=20&c=kiFHr2Y_WReN_AqwQExCe5acickkBHhImEtFi59CyMQ="
        title="Sushi" />
      <CategoryCard imgUrl="https://thumbs.dreamstime.com/b/pizza-slice-5957584.jpg" title="Pizza" />
      <CategoryCard imgUrl="https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?s=612x612&w=0&k=20&c=lmJ0qUjC3FtCrWOGU0hWvqBgXcKZ1imiXKOMuHRfFH8="
        title="Burger" />
      <CategoryCard imgUrl="https://voyagist.ru/wp-content/uploads/2021/01/festival-gorskih-hinkali-saperavi-cafe.jpg" 
      title="Khinkali" />
      <CategoryCard imgUrl="https://media.istockphoto.com/id/1320695906/photo/poke-bowl-with-salmon-avocado-cucumber-tomato-and-seaweed-top-view.jpg?b=1&s=170667a&w=0&k=20&c=6041qKZO8Giq6PuNuBq9fy-vB6bpo8prlQ-1BKQQQ9M=" 
      title="Bowl" />
      <CategoryCard imgUrl="https://media.istockphoto.com/id/1325172440/photo/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-olives-capers-anchovies-and.jpg?b=1&s=170667a&w=0&k=20&c=0XEgTZ2pcp83v0rBgjtQ0bH9pXkxYDQgW7mrc5aNX30=" 
      title="Pasta" />
      <CategoryCard imgUrl="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?cs=srgb&dl=pexels-nishant-aneja-2955819.jpg&fm=jpg" 
      title="Kebab" />

    </ScrollView>
  )
}

export default Categories