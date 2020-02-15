import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationRouts } from '../../Navigation/NavigationRoutes';

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NavigationRouts.TABS);
    }, 300);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash</Text>
    </View>
  );
};
