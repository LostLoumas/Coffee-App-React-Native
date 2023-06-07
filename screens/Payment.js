import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { themeColors } from '../theme';
import QRCode from 'react-native-qrcode-svg';

const Payment = ({ navigation, route }) => {
  const { name, size, price, quantity, image } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
    // Redirect to a success screen or perform further actions
    if (paymentOption === 'multicaixa') {
      setIsLoading(true);
      // Simulating payment processing for 3 seconds
      setTimeout(() => {
        setIsLoading(false);
        // Redirect or perform further actions after payment processing
      }, 3000);
    } else if (paymentOption === 'referencia') {
      // Generate random reference number
      const referenceNumber = Math.floor(Math.random() * 10000000000);
      alert(`Reference Number: ${referenceNumber}`);
    }
  };

  const renderPaymentContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={themeColors.primary} />
          <Text style={styles.loadingText}>Processing payment...</Text>
        </View>
      );
    } else if (paymentOption === 'referencia') {
      // Generate random reference number
      const referenceNumber = Math.floor(Math.random() * 10000000000);
      return (
        <View style={styles.paymentContentContainer}>
          <Text style={styles.paymentContentText}>Numbero De Referencia:</Text>
          <Text style={styles.referenceNumber}>{referenceNumber}</Text>
          <Text style={styles.paymentInfo}>Por favor use este numero para completar o seu pagamento</Text>
        </View>
      );
    } else if (paymentOption === 'payO') {
      // Generate QR code data
      const qrData = `${name}\nPrice: ${price * quantity} Kz\nQuantity: ${quantity}\nSize: ${size}`;

      return (
        <View style={styles.paymentContentContainer}>
          <Text style={styles.paymentContentText}>Scan the QR Code to make your payment:</Text>
          <QRCode value={qrData} size={200} style={styles.qrCodeImage} />
        </View>
      );
    } else if (paymentOption === 'multicaixa express') {
        return (
            <View>
                <View>
                <ActivityIndicator size="large" color={themeColors.primary} />
                <Text style={styles.loadingText}>Conectando!</Text>
                </View>
            </View>
          );
    }

    // Default content is the order summary
    return (
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryText}>Order Summary</Text>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Name:</Text>
          <Text style={styles.orderSummaryValue}>{name}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Size:</Text>
          <Text style={styles.orderSummaryValue}>{size}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Quantity:</Text>
          <Text style={styles.orderSummaryValue}>{quantity}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Price:</Text>
          <Text style={styles.orderSummaryValue}>{price} Kz</Text>
        </View>
        <View style={styles.orderSummaryTotal}>
          <Text style={styles.orderSummaryLabel}>Total:</Text>
          <Text style={styles.orderSummaryValue}>{price * quantity} Kz</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.orderSummaryContainer}>
        <Text style={styles.orderSummaryText}>Order Summary</Text>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Name:</Text>
          <Text style={styles.orderSummaryValue}>{name}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Size:</Text>
          <Text style={styles.orderSummaryValue}>{size}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Quantity:</Text>
          <Text style={styles.orderSummaryValue}>{quantity}</Text>
        </View>
        <View style={styles.orderSummaryItem}>
          <Text style={styles.orderSummaryLabel}>Price:</Text>
          <Text style={styles.orderSummaryValue}>{price} Kz</Text>
        </View>
        <View style={styles.orderSummaryTotal}>
          <Text style={styles.orderSummaryLabel}>Total:</Text>
          <Text style={styles.orderSummaryValue}>{price * quantity} Kz</Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentHeaderText}>Payment Methods</Text>
        <View style={styles.paymentOptionsContainer}>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentOption('multicaixa express')}
            disabled={isLoading}
          >
            <Text style={styles.paymentOptionText}>Multicaixa Express</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentOption('referencia')}
            disabled={isLoading}
          >
            <Text style={styles.paymentOptionText}>Referencia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentOption('payO')}
            disabled={isLoading}
          >
            <Text style={styles.paymentOptionText}>Pay O</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePayment} disabled={!paymentOption || isLoading}>
          <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentContent}>{renderPaymentContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  orderSummaryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderSummaryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  orderSummaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderSummaryLabel: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  orderSummaryValue: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    textAlign: 'right',
  },
  orderSummaryTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  paymentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  paymentHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  paymentOptionsContainer: {
    marginBottom: 16,
  },
  paymentOption: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  paymentOptionText: {
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: themeColors.bgLight,
    borderRadius: 18,
    paddingVertical: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  paymentContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: '#333333',
    alignSelf:'center'
  },
  paymentContentContainer: {
    alignItems: 'center',
  },
  paymentContentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  referenceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  paymentInfo: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  qrCodeImage: {
    marginTop: 16,
  },
});

export default Payment;
