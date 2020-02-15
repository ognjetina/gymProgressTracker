import React from 'react';
import { ManagementScreen, WorkoutCRUDScreen } from '../Screens';
import { NavigationRouts } from './NavigationRoutes';
import { createStackNavigator } from 'react-navigation-stack';

export const ManagementNavigator = createStackNavigator(
  {
    [NavigationRouts.MANAGEMENT]: ManagementScreen,
    [NavigationRouts.WORKOUT_CRUD]: WorkoutCRUDScreen,
  },
  {
    initialRouteName: NavigationRouts.MANAGEMENT,
    headerMode: 'none',
  }
);
