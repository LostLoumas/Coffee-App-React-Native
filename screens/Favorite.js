import React, { useContext } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { FavoriteContext } from '../navigation/FavoriteContex';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function FavoriteScreen() {
  const { favoriteItems } = useContext(FavoriteContext);

  if (favoriteItems.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Não existe nenhum produto favorito.</Text>
      </View>
    );
  }

  return (
    <View style={`overflow-visible flex justify-center flex-1 ${ios ? 'mt-10' : ''}`}>
      <Carousel
        containerCustomStyle={{ overflow: 'visible' }}
        data={favoriteItems}
        renderItem={({ item }) => <CoffeeCard item={item} />}
        firstItem={1}
        loop={true}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.75}
        sliderWidth={width}
        itemWidth={width * 0.63}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
}
