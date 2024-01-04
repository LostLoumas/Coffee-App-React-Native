import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const handleEditProfile = () => {
    // Handle edit profile action
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Usuario</Text>
      </View>
      <View style={styles.body}>
        <ProfileSection title="Bio">
          <Text style={styles.sectionContent}>
            I'm a software engineer passionate about building amazing mobile applications.
          </Text>
        </ProfileSection>
        <ProfileSection title="Location">
          <Text style={styles.sectionContent}>Angola, Luanda</Text>
        </ProfileSection>
        <ProfileSection title="Email">
          <Text style={styles.sectionContent}>johndoe@example.com</Text>
        </ProfileSection>

        </View>
        <>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logout}>LogOut</Text>
        </TouchableOpacity>
        </>
    </SafeAreaView>
  );
};

const ProfileSection = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}:</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  body: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555555',
  },
  logout:{
    color:'red',
    fontSize: 16,
    justifyContent:'center',
    alignSelf:'center'

  }
});

export default ProfileScreen;
