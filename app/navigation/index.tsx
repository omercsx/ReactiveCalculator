import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeHeader from '../components/HomeHeader';

import Home from '../Screens/Home';

import type { RootNavigatorParamList } from '../types/navigation';
import NormalCalculator from '../Screens/NormalCalculator';
import AgeCalculator from '../Screens/AgeCalculator';
import GravityCalculator from '../Screens/GravityCalculator/GravityCalculator';
import BMICalculator from '../Screens/BMICalculator/BMICalculator';
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
				<Stack.Screen
					name='Age Calculator'
					component={AgeCalculator}
					options={{ headerTitle: 'Age Calculator' }}
				/>
				<Stack.Screen
					name='BMI Calculator'
					component={BMICalculator}
					options={{ headerTitle: 'BMI Calculator' }}
				/>
				<Stack.Screen
					name='Gravity Calculator'
					component={GravityCalculator}
					options={{ headerTitle: 'Gravity Calculator' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
