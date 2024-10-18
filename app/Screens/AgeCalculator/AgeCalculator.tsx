import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';

const AgeCalculator = () => {
	const [date, setDate] = useState(dayjs());

	const calculateAge = () => {
		const age = dayjs().diff(date, 'year');
		alert(`You are ${age} years old`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Date of Birth</Text>
			<DateTimePicker
				date={date}
				onChange={params => params.date && setDate(dayjs(params.date))}
				mode='single'
			/>
			<Button title='Calculate Age' onPress={calculateAge} />
		</View>
	);
};

export default AgeCalculator;

const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',

		marginBottom: 20,
	},
});
