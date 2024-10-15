import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				{ backgroundColor: title === 'Clear' ? 'orange' : 'grey' },
			]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};
export default Button;
const styles = StyleSheet.create({
	container: {
		width: 72,
		height: 72,
		backgroundColor: 'grey',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
});
