import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }} // Use inline styles for width/height/tintColor
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabIcon icon={icons.home} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabIcon icon={icons.search} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabIcon icon={icons.user} color={color} />,
        }}
      />
      <Tabs.Screen
    name="heart"
    options={{
      title: 'Following',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.heart}
          color={color}
          name="Following"
          focused={focused}
        />
      ),
    }}
  />
  <Tabs.Screen
    name="analytics"
    options={{
      title: 'Analytics',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.analytics}
          color={color}
          name="Analytics"
          focused={focused}
        />
      ),
    }}
  />
    </Tabs>
  );
};

export default TabsLayout;
