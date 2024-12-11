import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFonts } from "expo-font";
import InvestmentScreen from './screens/InvestmentScreen';

const App = () => {
  const [fontsLoaded] = useFonts({
    "CharmanSerif-Regular": require("../assets/fonts/CharmanSerif-Black.otf"),
    "NotoSans": require("../assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#7B28B1" />
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return <InvestmentScreen />;
};

export default App;
