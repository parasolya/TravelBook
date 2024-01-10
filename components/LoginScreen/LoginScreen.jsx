import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import React, { useState } from "react";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const sighnIn = () => {
    console.log("user has", `email: ${email} + password: ${password}`);
    // Alert.alert("user has", `email: ${email} + password: ${password}`);
    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={{...styles.form, paddingBottom: isShowKeyboard ? 10 : 144 }}>
          <Text style={styles.title}>Увійти</Text>

          <TextInput
            style={styles.inputBox}
            value={email}
            placeholder="Адреса електронної пошти"
            onChangeText={(email) => setEmail(email)}
            onFocus={() => {setIsShowKeyboard(true)}}
            name='email'
          />
          <View>
            <TextInput
              style={styles.inputBox}
              value={password}
              placeholder="Пароль"
              onChangeText={(password) => setPassword(password)}
              onFocus={() => {setIsShowKeyboard(true)}}
              name='password'
            />
            <Text style={styles.textClickInInput}>Показати</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={sighnIn}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.containerTextClick}>
            <Text style={styles.textClick}>Немає акаунту? </Text>
            <Text
              style={[styles.textClick, styles.textUnderline]}
              onPress={() => {}}
            >
              Зареєструватися
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 323,
    justifyContent: "flex-end",
  },
  form: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "Roboto-Medium",
    color: "black",
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 92,

    marginBottom: 33,
  },
  background: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputBox: {
    // alignItems: 'center',
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
  button: {
    width: 343,
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
  containerTextClick: {
    flexDirection: "row",
    //   gap:
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
});
