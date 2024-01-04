import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import { Dimensions, LogBox, Platform, Text, View } from 'react-native';
import ProductScreen from '../screens/Product/ProductScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid';
import Favorite from '../screens/Favorite';
import FavoriteProduct from '../screens/Product/FavoriteProduct'
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import Payment from '../screens/Payment';
import Login from '../screens/Auth/Login';
import Resetpassword from '../screens/Auth/ResetPassword';
import Register from '../screens/Auth/Register';
import RegisterBusiness from '../screens/Auth/RegisterBusiness';
import RestaurantScreen from '../screens/RestaurantScreen';
import Booking from '../screens/booking/Booking'
import QrScan from '../screens/QrScan';
import Table from '../screens/Table';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {backgroundColor: 'white'}
      }}> 

        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
        <Stack.Screen name="RegisterBusiness" options={{headerShown: false}} component={RegisterBusiness} />       
        <Stack.Screen name="Resetpassword" options={{headerShown: false}} component={Resetpassword} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
        <Stack.Screen name="Profile" options={{headerShown: false}} component={Profile} />
        <Stack.Screen name="Notification" options={{headerShown: false}} component={Notification} />
        <Stack.Screen name="Payment" options={{headerShown: false}} component={Payment} />
        <Stack.Screen name="Orders" options={{headerShown: false}} component={Orders} />
        <Stack.Screen name="Restaurant" options={{headerShown: false}} component={RestaurantScreen} />
        <Stack.Screen name="Booking" options={{headerShown: false}} component={Booking} />
        <Stack.Screen name="QrScan" options={{headerShown: false}} component={QrScan} />
        <Stack.Screen name="Table" options={{headerShown: false}} component={Table} />
        <Stack.Screen name="FavoriteProduct" options={{headerShown: false}} component={FavoriteProduct} />     

      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

function HomeTabs(){
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: 'center',
          
          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,

        },
        tabBarItemStyle: {
          marginTop: ios? 30: 0,
          
        }
      })}
      
      >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={Favorite} />
      <Tab.Screen name="cart" component={Orders} />
    </Tab.Navigator>
  )
}



const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="30" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name === 'favourite') {
    icon =  focused? <HeartSolid size="30" color={themeColors.bgLight} /> : <HeartOutline size="30" strokeWidth={2} color="white" />
  }else if(route.name==='cart'){
    icon =  focused? <BagSolid size="30" color={themeColors.bgLight} /> : <BagOutline size="30" strokeWidth={2} color="white" />
  }

  
  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
    </View>
  )
}