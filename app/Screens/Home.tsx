import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../navigation/types';
import { LinearGradient } from 'expo-linear-gradient';
import CalculatorCard from '../components/CalculatorCard';
import bmiCalculator from '../../assets/BMI-calculator.png';
import ageCalculator from '../../assets/ageCalc.avif';
import gravityCalculator from '../../assets/gravity.jpg';
import calculator from '../../assets/calculator.png';

export default function Home({ navigation }: RootStackScreenProps<'Home'>) {
  const handleCardPress = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Reactive Calculator!</Text>
        <View style={styles.calculatorContainer}>
          <View style={styles.cardContainer}>
            <CalculatorCard 
              title='BMI Calculator' 
              image={bmiCalculator} 
              onPress={() => handleCardPress('BMICalculator')}
            />
            <CalculatorCard 
              title='Age Calculator' 
              image={ageCalculator}
              onPress={() => handleCardPress('AgeCalculator')}
            />
          </View>
          <View style={styles.cardContainer}>
            <CalculatorCard 
              title='Gravity Calculator' 
              image={gravityCalculator}
              onPress={() => handleCardPress('GravityCalculator')}
            />
            <CalculatorCard 
              title='Calculator' 
              image={calculator}
              onPress={() => handleCardPress('Calculator')}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 20,
  },
  calculatorContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 15,
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 20,
  },
});
