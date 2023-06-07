import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { FavoriteProvider } from './navigation/FavoriteContex';


export default function App() {
  return (
    <FavoriteProvider>
      <AppNavigation />
    </FavoriteProvider>
  );
}
