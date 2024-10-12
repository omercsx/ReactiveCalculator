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
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

export default HomeHeader;
