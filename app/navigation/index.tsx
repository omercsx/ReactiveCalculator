import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHeader from '../components/HomeHeader';

import Home from '../Screens/Home';

import type { RootNavigatorParamList } from '../types/navigation';
import NormalCalculator from '../Screens/NormalCalculator';

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
				<Stack.Screen
					name='Calculator'
					component={NormalCalculator}
					options={{ headerTitle: 'Normal Calculator' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
