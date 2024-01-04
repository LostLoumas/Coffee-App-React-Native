import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems, restaurants,promotionItems } from '../../constants';
import Carousel from 'react-native-snap-carousel';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';
import RestaurantCard from '../../components/RestaurantCard';


const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function HomeScreen({ navigation }) {

  const [activeCategory, setActiveCategory] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCoffeeItems, setFilteredCoffeeItems] = useState(restaurants, promotionItems);

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
  
    if (categoryId === 1) { // Assuming categoryId 1 represents all categories
      setFilteredCoffeeItems([...restaurants, ...promotionItems]);
    } else {
      const filteredItems = [...restaurants, ...promotionItems].filter((item) => item.categoryId === categoryId);
      setFilteredCoffeeItems(filteredItems);
    }
  };
  

  const handleSearch = () => {
    const filteredItems = restaurants && promotionItems.filter((item) => {
      if (item.name && typeof item.name === 'string') {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
    setFilteredCoffeeItems(filteredItems);
  };

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image 
        source={require('../../assets/images/beansBackground1.png')} 
        style={{ height: height * 0.2 }} 
        className="w-full absolute -top-5 opacity-10" />
      <SafeAreaView className={ios ? '-mb-8' : ''}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Image source={require('../../assets/images/avatar.png')} className="h-9 w-9 rounded-full" />
          </TouchableOpacity>

          <View className="flex-row items-center space-x-2">
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text className="font-semibold text-base">
              Angola, Luanda
            </Text>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
            <BellIcon size={27} color="black" />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-5 shadow" style={{ marginTop: height * 0.06 }}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              onSubmitEditing={handleSearch}
              className="p-4 flex-1 font-semibold text-gray-700"
            />

            <TouchableOpacity
              onPress={handleSearch}
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size={25} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* categories */}
        <View className="px-5 mt-6">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            className="overflow-visible"
            renderItem={({ item }) => {
              const isActive = item.id === activeCategory;
              const activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity 
                  onPress={() => handleCategorySelect(item.id)}
                  style={{ backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}
                  className="p-4 px-5 mr-2 rounded-full shadow"
                >
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View> 
      </SafeAreaView>

      {/* coffee cards */}
      <View className={`overflow-visible flex justify-center flex-1 ${ios ? 'mt-10' : ''}`}>
        <View>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={filteredCoffeeItems}
            renderItem={({ item }) => <RestaurantCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </View>
    </View>
  );
}
