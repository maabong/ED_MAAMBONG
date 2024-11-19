import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { router } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          {/* Logo */}
          <Image source={images.logo} style={styles.logo} resizeMode="contain" />

          {/* Welcome Title */}
          <Text style={styles.headerText}>
            Welcome to BILILOK!
          </Text>

          {/* Description */}
          <Text style={styles.descriptionText}>
            Created for those who live and breathe movies. Dive into a world of endless movies, follow your favorites, and discover your next obsession.
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => router.push('/sign-in')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Match the clean background style
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    width: 300,
    height: 120,
    marginBottom: 24,
  },
  headerText: {
    fontSize: 22,
    color: '#00008B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#001F3F',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#00008B',
    borderRadius: 8,
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
