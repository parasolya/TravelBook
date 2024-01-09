import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./components/RegistrationScreen/RegistrationScreen.jsx";
import { LoginScreen } from "./components/LoginScreen/LoginScreen.jsx";
import { PostsScreen } from "./components/PostsScreen/PostsScreen.jsx";
import BG from "./images/photoBG.png";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <ImageBackground source={BG} resizeMode="stretch" style={styles.image}>
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        <PostsScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    position: "absolute",
  },
});
