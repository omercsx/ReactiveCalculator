import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const NormalCalculator = () => {
	const [display, setDisplay] = useState('0');
	const [currentValue, setCurrentValue] = useState('');
	const [previousValue, setPreviousValue] = useState('');
	const [operation, setOperation] = useState('');

	const handleNumber = (num: string) => {
		if (display === '0' || operation === '=') {
			setDisplay(num);
			setCurrentValue(num);
		} else {
			setDisplay(display + num);
			setCurrentValue(currentValue + num);
		}
	};

	const handleOperator = (op: string) => {
		if (currentValue !== '') {
			if (previousValue !== '') {
				handleCalculate();
			} else {
				setPreviousValue(currentValue);
			}
			setCurrentValue('');
			setOperation(op);
			setDisplay(''); // Clear the display after operator is pressed
		}
	};

	const handleCalculate = () => {
		if (currentValue !== '' && previousValue !== '') {
			const current = parseFloat(currentValue);
			const previous = parseFloat(previousValue);
			let result = 0;

			switch (operation) {
				case '+':
					result = previous + current;
					break;
				case '-':
					result = previous - current;
					break;
				case '*':
					result = previous * current;
					break;
				case '/':
					result = previous / current;
					break;
			}

			setDisplay(result.toString());
			setPreviousValue(result.toString());
			setCurrentValue('');
			setOperation('=');
		}
	};

	const handleClear = () => {
		setDisplay('0');
		setCurrentValue('');
		setPreviousValue('');
		setOperation('');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.display}>{display}</Text>
			<View style={styles.row}>
				<Button title='Clear' onPress={handleClear} />
				<Button title='+' onPress={() => handleOperator('+')} />
				<Button title='-' onPress={() => handleOperator('-')} />
				<Button title='=' onPress={handleCalculate} />
			</View>
			<View style={styles.row}>
				<Button title='7' onPress={() => handleNumber('7')} />
				<Button title='8' onPress={() => handleNumber('8')} />
				<Button title='9' onPress={() => handleNumber('9')} />
				<Button title='/' onPress={() => handleOperator('/')} />
			</View>
			<View style={styles.row}>
				<Button title='4' onPress={() => handleNumber('4')} />
				<Button title='5' onPress={() => handleNumber('5')} />
				<Button title='6' onPress={() => handleNumber('6')} />
				<Button title='*' onPress={() => handleOperator('*')} />
			</View>
			<View style={styles.row}>
				<Button title='1' onPress={() => handleNumber('1')} />
				<Button title='2' onPress={() => handleNumber('2')} />
				<Button title='3' onPress={() => handleNumber('3')} />
				<Button title='0' onPress={() => handleNumber('0')} />
			</View>
		</View>
	);
};

export default NormalCalculator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		gap: 10,
	},
	display: {
		fontSize: 40,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'right',
		width: '90%',
		padding: 10,
		backgroundColor: '#f0f0f0',
		borderRadius: 5,
		minHeight: 50,
	},
});
