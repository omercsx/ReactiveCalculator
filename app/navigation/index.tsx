import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import logo from '../../assets/reactive.webp'

import Home from '../Screens/Home';

import type { RootNavigatorParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ header: () => <HomeHeader /> }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const HomeHeader = () => {
	return <Image source={require('../assets/images/logo.png')} />;
};

export default Navigation;
