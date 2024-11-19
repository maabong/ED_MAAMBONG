import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Sample data for the featured movie and movie categories
const featuredMovie = {
  title: "Featured Movie",
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEaXHjUSoMVsUTvevxNiRnWtEA0-yIUfjKA&s',
};

const categories = [
  {
    title: "Trending Now",
    movies: [
      { id: '1', title: "Movie 1", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPlDGVMH4ozz_hFGiNjLRvXsgsT9z7WmRoQ&s' },
      { id: '2', title: "Movie 2", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1xm01zl7BAejDEHoo8VrLcHS2FGzFAAgWw&s' },
      { id: '3', title: "Movie 3", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhYPOJ3jmHDTZpXHM7H7RlZ9Gt0fsYoWl5w&s' },
    ],
  },
  {
    title: "Top Picks for You",
    movies: [
      { id: '4', title: "Movie 4", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4w05g3f4gZev5nP8C6EM1ykQu81cy68C6Lg&s' },
      { id: '5', title: "Movie 5", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL3b-lxK37zo9lk87QPwZqN4PhgL1C4t35w&s' },
      { id: '6', title: "Movie 6", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5njzCavG0gPCPKxvyhauh2aQITHs-y1x0w&s' },
    ],
  },
];

// Component for displaying movies in each category
const MovieRow = ({ category }) => {
  const navigation = useNavigation(); // Navigation hook to redirect

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{category.title}</Text>
      <FlatList
        horizontal
        data={category.movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { movie: item })}>
            <View style={styles.movieContainer}>
              <Image source={{ uri: item.image }} style={styles.moviePoster} />
              <Text style={styles.movieTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Main Home component to display featured movie and categories
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={{ uri: featuredMovie.image }} style={styles.heroImage} />
        <Text style={styles.heroTitle}>{featuredMovie.title}</Text>
      </View>

      {categories.map((category) => (
        <MovieRow key={category.title} category={category} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  heroContainer: {
    height: 400,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroTitle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  categoryContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  moviePoster: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  movieTitle: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
  },
});

export default Home;
