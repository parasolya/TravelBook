import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

// import inputBg from '../../images/'

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
    <Image source={require('../../images/addPhoto.png')} style={styles.addPhoto}></Image>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Логін"
        // onChangeText={newText => setText(newText)}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Адреса електронної пошти"
        // onChangeText={newText => setText(newText)}
      />
      <View>
      <TextInput
        style={styles.inputBox}
        placeholder="Пароль"
        // onChangeText={newText => setText(newText)}
      />
      <Text style={styles.textClickInInput}>Показати</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("You tapped the Decrypt button!");
        }}
      >
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
<Text style={styles.textClick}>Вже є акаунт? Увійти</Text>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    color: "black",
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 92,

    marginBottom: 33,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  background: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputBox: {
    // alignItems: 'center',
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
    width: 343,
    alignItems: "center",
    justifyContent: 'center',
    width: 343,
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
