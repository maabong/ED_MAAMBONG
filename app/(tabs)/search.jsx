import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const movieData = [
  { id: '1', title: 'Sea Beast', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4w05g3f4gZev5nP8C6EM1ykQu81cy68C6Lg&s' },
  { id: '2', title: 'Fast X', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL3b-lxK37zo9lk87QPwZqN4PhgL1C4t35w&s' },
  { id: '3', title: 'Luca', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5njzCavG0gPCPKxvyhauh2aQITHs-y1x0w&s' },
  { id: '4', title: 'All Of Us Are Dead', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEaXHjUSoMVsUTvevxNiRnWtEA0-yIUfjKA&s' },
  { id: '5', title: 'Despicable Me 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPlDGVMH4ozz_hFGiNjLRvXsgsT9z7WmRoQ&s' },
  // Add more movies as needed
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const fadeAnim = new Animated.Value(0); // For fade-in effect

  // Function to filter movies based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filteredData);
    } else {
      setFilteredMovies(movieData); // Reset to all movies if the query is empty
    }
    // Trigger fade-in effect when filtering results
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Fix to re-trigger animation when movies are updated
  useEffect(() => {
    fadeAnim.setValue(0); // Reset fade animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [filteredMovies]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a movie..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Display filtered movies */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <FlatList
          data={filteredMovies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.movieCard} activeOpacity={0.8}>
              <Image source={{ uri: item.image }} style={styles.moviePoster} />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.noResultsText}>No movies found</Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Adds subtle shadow effect
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // Adds depth to the cards
  },
  moviePoster: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  movieInfo: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default Search;
