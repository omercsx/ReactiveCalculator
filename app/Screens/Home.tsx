import { StyleSheet, Text, View } from 'react-native';
import CalculatorCard from '../components/CalculatorCard';
import bmiCalculator from '../../assets/BMI-calculator.png';
import ageCalculator from '../../assets/ageCalc.avif';
import gravityCalculator from '../../assets/gravity.jpg';
import calculator from '../../assets/calculator.png';

const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Reactive Calculator!</Text>
			<View style={styles.cardContainer}>
				<CalculatorCard title='BMI Calculator' image={bmiCalculator} />
				<CalculatorCard title='Age Calculator' image={ageCalculator} />
			</View>
			<View style={styles.cardContainer}>
				<CalculatorCard title='Gravity Calculator' image={gravityCalculator} />
				<CalculatorCard title='Calculator' image={calculator} />
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202830',
		alignItems: 'center',
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 20,
		marginTop: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 20,
		color: '#fff',
	},
});
