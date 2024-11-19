// app/_layout.jsx
import { useEffect } from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Prevent auto-hide of the splash screen

const MainLayout = () => {
  // Load custom fonts
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded, error]);

  // Show nothing while fonts are loading
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
      {/* Removed the component prop */}
      <Stack.Screen name="Home" />
      <Stack.Screen name="MovieDetail" />
    </Stack>
  );
};

export default MainLayout;
