import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
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
import { CreatePostsScreen } from "./components/CreatePostsScreen/CreatePostsScreen.jsx";
import { Profile } from "./components/Profile/Profile.jsx"
import  Home  from './components/Home/Home.jsx';

const MainStack = createStackNavigator();

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
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="RegistrationScreen">
        <MainStack.Screen name='RegistrationScreen' component={RegistrationScreen} />
        <MainStack.Screen name='LoginScreen' component={LoginScreen} />
        <MainStack.Screen name='PostsScreen' component={PostsScreen} />
        {/* <MainStack.Screen name='CreatePostsScreen' component={CreatePostsScreen} /> 
         <MainStack.Screen name='Profile' component={Profile} 
        // options={{ headerShown: false }} 
        /> */}
        <MainStack.Screen name= 'Home' component={Home} options={{ headerShown: false }} />

    </MainStack.Navigator>
    </NavigationContainer> 
  );
}


