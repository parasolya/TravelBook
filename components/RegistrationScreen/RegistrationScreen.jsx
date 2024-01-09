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
import React, {useState} from "react";

// import inputBg from '../../images/'

export const RegistrationScreen = () => {
  const [login, setLogin]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]=useState('');

  const sighnUp = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >

    <View style={styles.containerForm}>
    <Image source={require('../../images/addPhoto.png')} style={styles.addPhoto}></Image>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={styles.inputBox}
        value={login}
        placeholder="Логін"
        onChangeText={login => setLogin(login)}
        // defaultValue={login}
      />
      <TextInput
        style={styles.inputBox}
        value={email}
        placeholder="Адреса електронної пошти"
        onChangeText={email => setEmail(email)}
      />
      <View>
      <TextInput
        style={styles.inputBox}
        value={password}
        placeholder="Пароль"       
        onChangeText={password => setPassword(password)}
      />
      <Text style={styles.textClickInInput}>Показати</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={sighnUp}
      >
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
<Text style={styles.textClick}>Вже є акаунт? Увійти</Text>
</View>
</KeyboardAvoidingView>
        </TouchableWithoutFeedback>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 263,  
    justifyContent: "flex-end",
  },

  containerForm: {
    flex: 1,
    position: 'relative',
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",    
  },
  title: {
    fontFamily: 'Roboto-Medium',
    color: "black",
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 92,

    marginBottom: 33,
  },
  inputBox: {
    fontFamily: 'Roboto-Regular',
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
  button: {    
    // position: 'absolute',
    // top: 100,
    width: 343,
    alignItems: "center",
    justifyContent: 'center',
    // width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
  textClickInInput: {
    position: 'absolute',
    top: 14,
    right: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
  textClick: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
    marginTop: 16,
  },
  addPhoto: {
    position: 'absolute',
    top: -60,
  }
});
