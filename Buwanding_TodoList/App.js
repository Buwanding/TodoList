import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/ElementInput';
import ElementText from './components/Elementext';



export default function App() {

  return (
    <View style={styles.container}>
      <ElementText />
      <Input 
      />
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});