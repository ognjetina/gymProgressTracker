import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { PracticeScreen, SettingsScreen, SummaryScreen } from '../Screens';
import { NavigationRouts } from './NavigationRoutes';
import { TabBar } from '../Components';

export const MainTabNavigator = createBottomTabNavigator(
	{
		[NavigationRouts.PRACTICE]: PracticeScreen,
		[NavigationRouts.SUMMARY]: SummaryScreen,
		[NavigationRouts.SETTINGS]: SettingsScreen,
	},
	{
		initialRouteName: NavigationRouts.PRACTICE,
		tabBarComponent: props => (
			<TabBar {...props} style={{ borderTopColor: '#605F60' }} />
		)
	}
);