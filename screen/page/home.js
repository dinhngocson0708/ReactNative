import { ImageBackground, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ButtonBasics from '../components/button';
export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ImageBackground source={require('../../assets/background.png')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Wellcome To Son and Tra</Text>
                <Text style={styles.tilteText}>A Hub Where Whispers Echo Loudest </Text>
                <ButtonBasics/>
                <Text style={styles.title}>Already have an account? <Text style={styles.login}>Login</Text></Text>

            </ImageBackground>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    image: {
      flex: 1,
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 20,
    },
    tilteText: {
      color: '#1E1E1E',
      fontFamily: 'Inter',
      fontSize: 25,
      marginLeft: 20,
      fontWeight: 'bold',

    },
   
    title: {
      marginLeft: 50,
      color: 'white',
      fontWeight: 'bold',
    },
    login: {
      color: 'black'
    }
  
  });