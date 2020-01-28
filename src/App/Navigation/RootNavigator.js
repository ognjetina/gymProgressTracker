import { createSwitchNavigator } from 'react-navigation';
import { SplashScreen } from '../Screens';
import { MainTabNavigator } from './MainTabNavigator';
import { NavigationRouts } from './NavigationRoutes';

export const RootNavigator = createSwitchNavigator({
		[NavigationRouts.SPLASH]: { screen: SplashScreen },
		[NavigationRouts.TABS]: { screen: MainTabNavigator }
	},
	{ initialRouteName: NavigationRouts.SPLASH }
);

export default NavigationRouts;