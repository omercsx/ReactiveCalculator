import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackScreenProps } from '../navigation/types';
import { LinearGradient } from 'expo-linear-gradient';

const buttons = [
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
  ['C', '⌫'],
];

export default function Calculator({ navigation }: RootStackScreenProps<'Calculator'>) {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (operator: string) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + operator + ' ');
  };

  const calculate = () => {
    const fullEquation = equation + display;
    try {
      const sanitizedEquation = fullEquation
        .replace('×', '*')
        .replace('÷', '/');
      const result = eval(sanitizedEquation);
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
    setShouldResetDisplay(true);
  };

  const handlePress = (button: string) => {
    switch (button) {
      case 'C':
        setDisplay('0');
        setEquation('');
        break;
      case '⌫':
        setDisplay(display.length > 1 ? display.slice(0, -1) : '0');
        break;
      case '=':
        calculate();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        handleOperator(button);
        break;
      default:
        handleNumber(button);
    }
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.displayContainer}>
        {equation && (
          <Text style={styles.equation}>{equation}</Text>
        )}
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' && styles.equalButton,
                  ['÷', '×', '-', '+'].includes(button) && styles.operatorButton,
                  ['C', '⌫'].includes(button) && styles.functionButton,
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={[
                  styles.buttonText,
                  ['÷', '×', '-', '+', 'C', '⌫'].includes(button) && styles.operatorText,
                ]}>
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  displayContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    minHeight: 120,
    justifyContent: 'flex-end',
  },
  equation: {
    color: '#rgba(255,255,255,0.7)',
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 10,
  },
  display: {
    color: '#ffffff',
    fontSize: 48,
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorButton: {
    backgroundColor: '#192f6a',
  },
  equalButton: {
    backgroundColor: '#4CAF50',
  },
  functionButton: {
    backgroundColor: '#FF5722',
    flex: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  operatorText: {
    color: '#ffffff',
  },
});
