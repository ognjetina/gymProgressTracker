import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigationContainer } from './Navigation/NavigationContainer';

export const App: () => React$Node = () => {
	return (
		<AppNavigationContainer />
	);
};