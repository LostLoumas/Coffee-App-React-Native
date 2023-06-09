import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Orders = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch orders
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    // Simulating API call and updating the orders state
    setTimeout(() => {
      const fetchedOrders = [
        { id: 1, title: 'Cappuccino', status: 'Pending', date: '2023-06-01', customer: 'John Doe' },
        { id: 2, title: 'Latte', status: 'Completed', date: '2023-06-02', customer: 'Jane Smith' },
        { id: 3, title: 'Espresso', status: 'Pending', date: '2023-06-03', customer: 'Alex Johnson' },
        // ... additional orders
      ];
      setOrders(fetchedOrders);
      setIsLoading(false);
    }, 2000);
  };

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderCard}>
      <Text style={styles.orderTitle}>{item.title}</Text>
      <Text
        style={[
          styles.orderStatus,
          item.status === 'Pending' ? styles.pendingStatus : styles.completedStatus,
        ]}
      >
        {item.status}
      </Text>
      <Text style={styles.orderDetails}>{item.date} | {item.customer}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.heading}>Orders</Text>
      <View />
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <Text style={styles.emptyStateText}>No orders found.</Text>
    </View>
  );

  const renderLoadingIndicator = () => (
    <View style={styles.loadingIndicator}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {isLoading ? (
        renderLoadingIndicator()
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={renderEmptyState}
          refreshing={isLoading}
          onRefresh={fetchOrders}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  orderTitle: {
    fontSize: 16,
  },
  orderStatus: {
    fontSize: 14,
    marginTop: 8,
  },
  orderDetails: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  pendingStatus: {
    color: 'orange',
  },
  completedStatus: {
    color: 'green',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: 'gray',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Orders;
