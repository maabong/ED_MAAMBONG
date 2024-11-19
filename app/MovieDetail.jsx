import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const MovieDetail = ({ route }) => {
    const movie = route?.params?.movie || {};
    console.log('Received Movie Data:', movie); // Add this line to log movie data
  
    return (
      <View style={styles.container}>
        {movie.image ? (
          <>
            <Image source={{ uri: movie.image }} style={styles.moviePoster} />
            <Text style={styles.title}>{movie.title}</Text>
          </>
        ) : (
          <Text style={styles.title}>No Movie Data Available</Text>
        )}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  moviePoster: {
    width: 300,
    height: 450,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginTop: 20,
  },
});

export default MovieDetail;
