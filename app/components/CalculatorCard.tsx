import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	ImageSourcePropType,
} from 'react-native';

interface CalculatorCardProps {
	title: string;
	image: ImageSourcePropType;
	onPress: () => void;
}

const CalculatorCard = ({ title, image, onPress }: CalculatorCardProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<ImageBackground source={image} style={styles.container} resizeMode="cover">
				<Text style={styles.title}>{title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};

export default CalculatorCard;

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		overflow: 'hidden',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});
