import { View, Text, StyleSheet } from 'react-native';

export default function MainAppScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main App Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    color: '#4c669f',
  },
});
