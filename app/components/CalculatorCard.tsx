import { useNavigation } from '@react-navigation/native';
import {
	ImageSourcePropType,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';

interface CalculatorCardProps {
	title: string;
	image: ImageSourcePropType;

}

const CalculatorCard = ({ title, image }: CalculatorCardProps) => {
	const navigation = useNavigation<any>();

	const handlePress = () => {
		navigation.navigate(title);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<Image source={image} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CalculatorCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#151B23',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	image: {
		width: 100,
		height: 100,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
});
