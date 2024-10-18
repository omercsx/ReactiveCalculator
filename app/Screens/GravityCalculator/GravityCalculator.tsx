import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	Image,
} from 'react-native';
import mercury from '../../../assets/mercury.png';
import venus from '../../../assets/venus.jpg';
import earth from '../../../assets/earth.jpg';
import mars from '../../../assets/mars.png';
import jupiter from '../../../assets/jupiter.jpg';
import saturn from '../../../assets/Saturn.png';
import uranus from '../../../assets/uranus.png';
import neptune from '../../../assets/neptune.webp';

const planets = [
	{
		name: 'Mercury',
		gravity: 3.7,
		image: mercury,
	},
	{ name: 'Venus', gravity: 8.87, image: venus },
	{ name: 'Earth', gravity: 9.81, image: earth },
	{ name: 'Mars', gravity: 3.71, image: mars },
	{
		name: 'Jupiter',
		gravity: 24.79,
		image: jupiter,
	},
	{
		name: 'Saturn',
		gravity: 10.44,
		image: saturn,
	},
	{
		name: 'Uranus',
		gravity: 8.69,
		image: uranus,
	},
	{
		name: 'Neptune',
		gravity: 11.15,
		image: neptune,
	},
];

const GravityCalculator = () => {
	const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Earth as default
	const [weight, setWeight] = useState(70); // Default weight in kg

	const calculateWeight = (planetGravity: number) => {
		return ((weight / 9.81) * planetGravity).toFixed(2);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Gravity Calculator</Text>
			<View style={styles.weightContainer}>
				<Text style={styles.weightText}>Your Weight on Earth (kg):</Text>
				<View style={styles.weightControls}>
					<TouchableOpacity
						style={styles.weightButton}
						onPress={() => setWeight(Math.max(1, weight - 1))}
					>
						<Text style={styles.weightButtonText}>-</Text>
					</TouchableOpacity>
					<Text style={styles.weightValue}>{weight}</Text>
					<TouchableOpacity
						style={styles.weightButton}
						onPress={() => setWeight(weight + 1)}
					>
						<Text style={styles.weightButtonText}>+</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.planetScroll}
			>
				{planets.map(planet => (
					<TouchableOpacity
						key={planet.name}
						style={[
							styles.planetButton,
							selectedPlanet.name === planet.name && styles.selectedPlanet,
						]}
						onPress={() => setSelectedPlanet(planet)}
					>
						<Image source={planet.image} style={styles.planetImage} />
						<Text style={styles.planetName}>{planet.name}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<View style={styles.resultContainer}>
				<Text style={styles.resultText}>
					On {selectedPlanet.name}, you would weigh:
				</Text>
				<Text style={styles.resultValue}>
					{calculateWeight(selectedPlanet.gravity)} kg
				</Text>
			</View>
		</View>
	);
};

export default GravityCalculator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#202830',
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
		textAlign: 'center',
	},
	weightContainer: {
		marginBottom: 20,
	},
	weightText: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 10,
	},
	weightControls: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	weightButton: {
		backgroundColor: '#293038',
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	weightButtonText: {
		fontSize: 24,
		color: '#fff',
	},
	weightValue: {
		fontSize: 24,
		color: '#fff',
		marginHorizontal: 20,
	},
	planetScroll: {
		marginBottom: 20,
	},
	planetButton: {
		alignItems: 'center',
		marginRight: 15,
		opacity: 0.7,
	},
	selectedPlanet: {
		opacity: 1,
	},
	planetImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	planetName: {
		color: '#fff',
		marginTop: 5,
	},
	resultContainer: {
		backgroundColor: '#293038',
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
	},
	resultText: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 10,
	},
	resultValue: {
		fontSize: 36,
		fontWeight: 'bold',
		color: '#fff',
	},
});
