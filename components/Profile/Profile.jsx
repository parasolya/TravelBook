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
  import { ListPost } from "../shared/List/ListPost";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  
  import BG from "../../images/photoBG.png";
  
  const Tabs = createBottomTabNavigator();
  
  export const Profile = () => {
    const [userPhoto, setUserPhoto] = useState(require("../../images/avatar.jpg"));
    const [userName, setUserName] = useState('Avatar Avataro');
    
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [isFocused, setIsFocused] = useState({
      login: false,
      email: false,
      password: false,
    });
  
    // const navigation = useNavigation();

    
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container1}>
         <ImageBackground source={BG} resizeMode="stretch" style={styles.image}> 
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View
            style={styles.containerList}
          >
            <Image
              source={userPhoto}
              style={styles.userPhoto}
            ></Image>
            <Text style={styles.title}>{userName}</Text>
            <View style={styles.list}>
            <ListPost />

            </View>
            
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
      paddingTop: 147,
      justifyContent: "flex-end",
    },
  
    containerList: {
      flex: 1,
      
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      paddingRight: 16,
     paddingBottom: 32,
     paddingLeft: 16, 
    },
    title: {
      fontFamily: "Roboto-Medium",
      color: "#212121",
      fontSize: 30,
      letterSpacing: 0.3,
      textAlign: "center",
      marginTop: 92,
    },    
    userPhoto: {
      position: "absolute",
      top: -60,
      width: 120,
      height: 120,
      borderRadius: 16,
    },
    list: {
        width: "100%"
    }
  });
  
  
  