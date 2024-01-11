import { StyleSheet } from "react-native";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Heder */}
      <View style={styles.containerHader}>
        <Text style={styles.tytle}>Створити публікацію</Text>
        <Image
          source={require("../../images/arrow-left.png")}
          style={styles.imageArrow}
        ></Image>
      </View>
      {/* Body */}
      <View>
        {/* Photo */}
        <View style={styles.containerPhoto}>
          <Image source={require("../../images/ellipseForCamera.png")}></Image>
          <Image
            source={require("../../images/camera.png")}
            style={styles.imageCamera}
          ></Image>
        </View>
        <Text style={styles.textUnderPhoto}>Завантажте фото</Text>
      </View>
      {/* Inputs */}
      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputBox}
          placeholder="Назва..."
          placeholderTextColor="#BDBDBD"
          // onChangeText={newText => setText(newText)}
        />
      </View>
      <View style={[styles.containerInput, styles.containerLocality]}>
        <Image
          source={require("../../images/map-pin.png")}
          style={styles.iconMapPin}
        ></Image>
        <TextInput
          style={[styles.inputBox, styles.inputlocality]}
          placeholder="Місцевість..."
          // onChangeText={newText => setText(newText)}
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("You tapped the Decrypt button!");
        }}
      >
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
      {/* Footer */}
      <View style={styles.containerTrash}>
        <Image source={require("../../images/trash.png")}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  containerHader: {
    width: "100%",
    marginTop: 44,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingTop: 11,
    paddingBottom: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  imageArrow: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 10,
  },
  tytle: {
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 17,
  },
  containerPhoto: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  imageCamera: {
    position: "absolute",
  },
  textUnderPhoto: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 8,
    marginBottom: 32,
  },
  inputBox: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: 343,
    height: 50,
  },
  iconMapPin: {
    position: "absolute",
    marginRight: 20,
    width: 24,
    height: 24,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  containerLocality: {
    marginTop: 16,
  },
  inputlocality: {
    paddingLeft: 28,
  },
  button: {
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginTop: 32,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  containerTrash: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 120,
  },
});
