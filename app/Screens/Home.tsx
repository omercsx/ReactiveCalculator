import { StyleSheet, Text, View } from 'react-native';
const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Reactive Calculator!</Text>
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
