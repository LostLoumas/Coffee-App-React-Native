import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Notification = ({ navigation }) => {

  const notifications = [
    {
      id: 1,
      title: 'New Coffee Offer',
      description: 'Enjoy 20% off on all coffee drinks!',
      timestamp: 'June 7, 2023',
      image: require('../assets/images/coffee.png'),
    },
    {
      id: 2,
      title: 'Special Event',
      description: 'Join us for a live coffee brewing demonstration.',
      timestamp: 'June 6, 2023',
      image: require('../assets/images/coffee.png'),
    },
    // Add more notifications here...
  ];

  const renderNotificationItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.notificationItem} onPress={() => handleNotificationPress(item)}>
        <View style={styles.notificationImageContainer}>
          <Image source={item.image} style={styles.notificationImage} />
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription}>{item.description}</Text>
          <Text style={styles.notificationTimestamp}>{item.timestamp}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleNotificationPress = (notification) => {
    // Handle the notification press event, e.g., navigate to the notification details screen
    // using the notification id or perform an action based on the notification.
    console.log('Notification Pressed:', notification);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#F8F8F8',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    padding:10

  },
  notificationItem: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },
  notificationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  notificationDescription: {
    fontSize: 16,
    marginBottom: 4,
    color: '#666',
  },
  notificationTimestamp: {
    fontSize: 14,
    color: '#999',
  },
});
