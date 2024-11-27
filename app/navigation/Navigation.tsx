import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import Home from '../Screens/Home';
import BMICalculator from '../Screens/BMICalculator';
import AgeCalculator from '../Screens/AgeCalculator';
import GravityCalculator from '../Screens/GravityCalculator/GravityCalculator';
import Calculator from '../Screens/Calculator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Welcome'
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Welcome' component={WelcomeScreen} />
				<Stack.Screen name='SignIn' component={SignInScreen} />
				<Stack.Screen name='SignUp' component={SignUpScreen} />
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='BMICalculator' component={BMICalculator} />
				<Stack.Screen name='AgeCalculator' component={AgeCalculator} />
				<Stack.Screen name='GravityCalculator' component={GravityCalculator} />
				<Stack.Screen name='Calculator' component={Calculator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
