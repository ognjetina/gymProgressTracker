import React from 'react';
import {createAppContainer} from 'react-navigation';
import {RootNavigator} from './RootNavigator';
import {SafeAreaView} from 'react-native';
import {Colors} from '../Components/Colors';
import {DatabaseProvider} from '../Data/DatabaseContext';

const NavigationContainer = createAppContainer(RootNavigator);

export const AppNavigationContainer = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.BACKGROUND}}>
      <DatabaseProvider>
        <NavigationContainer />
      </DatabaseProvider>
    </SafeAreaView>
  );
};
