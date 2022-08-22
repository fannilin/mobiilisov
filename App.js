import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';


export default function App() {
  const [text, setText] = useState('odottamaton virhe');
  const buttonPressed = () => {
    Alert.alert('kirjoitit: ' + text);
  };
  return (
    <View style={styles.container}>
      <Text>Fannin mobiilisovellus</Text>
   <Button onPress={buttonPressed} title = "Press me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffp',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width: 200,
    borderColor: 'green',
    borderWidth: 2
  }
});
