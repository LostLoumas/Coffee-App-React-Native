import { View, Text, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { Camera } from 'react-native-feather';
import { FavoriteContext } from '../navigation/FavoriteContex';
import { AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function FavouriteScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToFavorites, removeFromFavorites, isItemFavorite } = useContext(FavoriteContext);

  const handleToggleFavorite = () => {
    if (isItemFavorite(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/beansBackground2.png')}
        style={{ height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-full border-2 border-white p-2"
            onPress={handleToggleFavorite}
          >
            <HeartIcon size="24" color={isItemFavorite(item.id) ? 'red' : 'white'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center"
        >
          <Image source={item.image} className="h-60 w-60" style={{ marginTop: ios ? 0 : 40 }} />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="flex-row justify-center items-center mx-4 rounded-3xl p-1 px-2 space-x-1 opacity-90 w-16"
        >
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{item.stars}</Text>
        </View>


        <View className="px-4 flex-row justify-between items-center">
          <Text style={{ color: themeColors.text }} className="text-3xl font-semibold">
            {item.name}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          <Text style={{ color: themeColors.text }} className="text-lg font-bold">
            Descricao
          </Text>
          <Text className="text-gray-600">{item.description}</Text>
        </View>
      </SafeAreaView>

      <View className={`space-y-3 ${ios ? 'mb-6' : 'mb-3'}`}>
        {/* buy now button */}
        <View className="flex-row justify-between px-4">
          <TouchableOpacity className="p-4 rounded-full border border-gray-400" onPress={() => navigation.navigate('QrScan')}>
          <AntDesign name="qrcode" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>
            navigation.navigate('Booking')}
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-4 rounded-full flex-1 ml-4"
          >
            <Text className="text-center text-white text-base font-semibold">Reservar Mesa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
