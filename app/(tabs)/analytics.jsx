import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, Grid, BarChart, PieChart } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';

const AnalyticsScreen = () => {
  // Sample data for charts
  const dailyUsers = [50, 100, 150, 200, 300, 250, 400]; // daily active users data
  const mostWatched = [10, 20, 30, 40, 50]; // most watched movies data

  // Sample data for pie chart
  const pieData = [
    { key: 1, amount: 50, svg: { fill: '#600080' } },
    { key: 2, amount: 100, svg: { fill: '#9900cc' } },
    { key: 3, amount: 150, svg: { fill: '#c61aff' } },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics Dashboard</Text>

      {/* Line Chart for Daily Active Users */}
      <Text style={styles.subtitle}>Daily Active Users</Text>
      <LineChart
        style={{ height: 200 }}
        data={dailyUsers}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>

      {/* Bar Chart for Most Watched Movies */}
      <Text style={styles.subtitle}>Most Watched Movies</Text>
      <BarChart
        style={{ height: 200 }}
        data={mostWatched}
        svg={{ fill: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </BarChart>

      {/* Pie Chart for User Device Breakdown */}
      <Text style={styles.subtitle}>User Device Breakdown</Text>
      <PieChart style={{ height: 200 }} data={pieData} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default AnalyticsScreen;
