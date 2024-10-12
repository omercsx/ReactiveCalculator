import { Image, StyleSheet, View } from 'react-native';
import logo from '../../assets/reactive.webp';

const HomeHeader = () => {
	return (
		<View style={styles.container}>
			<Image
				source={logo}
				style={{
					width: 100,
					height: 50,
					borderRadius: 20,
					borderWidth: 1,
					borderColor: '#fff',
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0D1217',
		paddingTop: 30,
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export default HomeHeader;
