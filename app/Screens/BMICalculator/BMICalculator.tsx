import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';

const BMICalculator = () => {
	const [result, setResult] = useState<number | null>(null);
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');

	const handleHeight = (value: string) => {
		setHeight(value);
	};

	const handleWeight = (value: string) => {
		setWeight(value);
	};

	const handleCalculate = () => {
		const heightInMeters = Number(height) / 100; // Convert cm to meters
		const weightInKg = Number(weight);

		if (heightInMeters > 0 && weightInKg > 0) {
			const bmi = weightInKg / (heightInMeters * heightInMeters);
			setResult(Number(bmi.toFixed(2)));
		} else {
			setResult(null);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Height (cm)</Text>
			<TextInput
				style={styles.input}
				keyboardType='numeric'
				value={height}
				onChangeText={handleHeight}
				placeholder='Enter height in cm'
				placeholderTextColor='#999'
			/>
			<Text style={styles.title}>Weight (kg)</Text>
			<TextInput
				style={styles.input}
				keyboardType='numeric'
				value={weight}
				onChangeText={handleWeight}
				placeholder='Enter weight in kg'
				placeholderTextColor='#999'
			/>
			<TouchableOpacity style={styles.button} onPress={handleCalculate}>
				<Text style={styles.buttonText}>Calculate BMI</Text>
			</TouchableOpacity>
			{result !== null && (
				<Text style={styles.result}>Your BMI is {result}</Text>
			)}
		</View>
	);
};

export default BMICalculator;

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#293038',
		padding: 20,
		borderRadius: 10,
		width: '100%',
		marginTop: 20,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
	},
	container: {
		flex: 1,
		backgroundColor: '#202830',
		alignItems: 'flex-start',
		padding: 20,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	input: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		borderWidth: 1,
		borderColor: '#fff',
		padding: 10,
		borderRadius: 10,
		width: '100%',
		marginBottom: 40,
	},
	result: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 20,
	},
});
