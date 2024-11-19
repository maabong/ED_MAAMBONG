import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FollowingList = () => {
  const [followState, setFollowState] = useState({});

  const data = [
    {
      id: '1',
      name: 'StellaTwilight',
      followers: '38.4K',
      videos: '40',
      profileImage: 'https://example.com/image1.jpg',
    },
    {
      id: '2',
      name: 'Astre Official',
      followers: '31.1K',
      videos: '49',
      profileImage: 'https://example.com/image2.jpg',
    },
    // Add more users here
  ];

  const handleFollowToggle = (id) => {
    setFollowState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderItem = ({ item }) => {
    const isFollowing = followState[item.id];

    return (
      <View style={styles.userContainer}>
        <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>
            {item.followers} Followers | {item.videos} Videos
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.followButton, isFollowing ? styles.unfollowButton : {}]}
          onPress={() => handleFollowToggle(item.id)}
        >
          <Text style={styles.followText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={styles.header}>Discover More Creators</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#888',
  },
  followButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  unfollowButton: {
    backgroundColor: '#FF4500',
  },
  followText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FollowingList;
