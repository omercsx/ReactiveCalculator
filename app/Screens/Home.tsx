import { StyleSheet, Text, View } from 'react-native';
import CalculatorCard from '../components/CalculatorCard';
import bmiCalculator from '../../assets/BMI-calculator.png';

const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Reactive Calculator!</Text>
			<CalculatorCard
				title='BMI Calculator'
				image={bmiCalculator}
				onPress={() => {}}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 20,
	},
});
