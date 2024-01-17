import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BG from "../../images/photoBG.png";



export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });

  const navigation = useNavigation();

  const handleFocus = (inputName) => () => {
    setIsFocused((prevState) => ({
      ...prevState, 
      [inputName]: true,
    }));
    setIsShowKeyboard(true);
  };
  
  const handleBlur = (inputName) => () => {
    setIsFocused((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  };
  
  const sighnUp = () => {
    setIsShowKeyboard(false);
    console.log(
      "user has",
      `login: ${login} email: ${email} + password: ${password}`
    );
    // Alert.alert("user has", `email: ${email} + password: ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container1}>
       <ImageBackground source={BG} resizeMode="stretch" style={styles.image}> 
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 10 : 78 }}
        >
          <Image
            source={require("../../images/addPhoto.png")}
            style={styles.addPhoto}
          ></Image>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={[styles.inputBox, isFocused.login && styles.inputFocused]}
            value={login}
            placeholder="Логін"
            onChangeText={(login) => setLogin(login)}
            // defaultValue={login}
            onFocus={handleFocus('login')}
            onBlur={handleBlur('login')}
            name="login"
          />
          <TextInput
            style={[styles.inputBox, isFocused.email && styles.inputFocused]}
            value={email}
            placeholder="Адреса електронної пошти"
            onChangeText={(email) => setEmail(email)}
            onFocus={handleFocus('email')}
            onBlur={handleBlur('email')}
            name="email"
          />
          <View>
            <TextInput
              style={[styles.inputBox, isFocused.password && styles.inputFocused]}
              value={password}
              placeholder="Пароль"
              onChangeText={(password) => setPassword(password)}
              onFocus={handleFocus('password')}
            onBlur={handleBlur('password')}
              name="password"
            />
            <Text style={styles.textClickInInput}>Показати</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={sighnUp}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text
            style={styles.textClick}
            onPress={() => {
              // navigation.navigate("LoginScreen");
              // navigation.navigate("PostsScreen");
              // navigation.navigate("CreatePostsScreen");
              navigation.navigate('Home');
              // navigation.navigate('Profile');

            }}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
      </KeyboardAvoidingView>
      </ImageBackground>
     </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    flex: 1,
    width: "100%",
    position: "absolute",   
  },
  container: {
    flex: 1,
    paddingTop: 263,
    justifyContent: "flex-end",
  },

  form: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 33,
  },
  inputBox: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  textClickInInput: {
    position: "absolute",
    top: 14,
    right: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  textClick: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
  },
  addPhoto: {
    position: "absolute",
    top: -60,
  },
});


