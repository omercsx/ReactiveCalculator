import { StyleSheet, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface CalculatorCardProps {
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}

const CalculatorCard = ({ title, image, onPress }: CalculatorCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
