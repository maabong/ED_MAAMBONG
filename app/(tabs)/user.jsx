import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import router to navigate

const User = () => {
  const router = useRouter(); // Get router for navigation

  // Example user data
  const userData = {
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWXUbTsFxlMrAXCQpKs_dQwq4h5PesutF7w&s', // Placeholder image URL
    username: 'JohnRonwell123',
    email: 'johnnys@gmail.com',
  };

  const handleLogout = () => {
    // Navigate to the index screen located in the app folder
    router.push('/'); // Use absolute path to navigate to the index screen
  };

  return (
    <View style={styles.container}>
      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
        <Text style={styles.username}>{userData.username}</Text>
        <Text style={styles.email}>{userData.email}</Text>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#FF3B30',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default User;
