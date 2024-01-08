import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './components/RegistrationScreen/RegistrationScreen.jsx';
import { LoginScreen } from './components/LoginScreen/LoginScreen.jsx';
import { PostsScreen } from './components/PostsScreen/PostsScreen.jsx'
import  BG from './images/photoBG.png';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) { return null};
  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="stretch" style={styles.image}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
        {/* <PostsScreen /> */}
        </ImageBackground>
      {/* <Image style={styles.background} source={BG}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'end',
  },
  image: {
    flex: 1,
  },
});