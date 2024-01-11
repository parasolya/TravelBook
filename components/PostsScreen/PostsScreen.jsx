import React, {useState} from "react";

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

export const PostsScreen = () => {
  const [userPhoto, setUserPhoto] = useState(require("../../images/avatar.jpg"));
  const [userName, setUserName] = useState('Avatar');
  const [userEmail, setUserEmail] = useState('avatar@gmail.com');

  return (
    
      <View style={styles.container}>
        {/* Photo */}
        <View style={styles.containerUser}>
          <Image source={userPhoto} style={styles.image} ></Image>          
        
        <View>
          <Text style={styles.textName}>{userName}</Text>
          <Text style={styles.textEmail}>{userEmail}</Text>
        </View>
        </View>
      </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingRight: 16,
     paddingBottom: 32,
     paddingLeft: 16, 
    // alignItems: "center",
  }, 
  containerUser: {
    flexDirection: "row",    
    height: 60,
    // backgroundColor: "red",
    // marginTop: 32,
    // borderWidth: 1,
    borderRadius: 16,
    // borderColor: "#E8E8E8",
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  textName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "#212121",
    // marginTop: 8,
    // marginBottom: 32,
  },
 textEmail: {
  fontFamily: "Roboto-Regular",
  fontSize: 11,
  color: "rgba(33, 33, 33, 0.80)",
  // marginTop: 8,
  // marginBottom: 32,
 },
 
});
