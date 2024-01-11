import React, { useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
    FlatList,
  } from "react-native";

const COURSES = [
    {
      id: "45k6-j54k-4jth",
      title: "forest",
      img: require('../../../images/forest.png')
    },
    {
      id: "4116-jfk5-43rh",
      title: "sunset",
      img: require('../../../images/sunset.png'),
    },
    {
        id: "4116-jfk5-44rh",
        title: "door",
        img: require('../../../images/door.png'),
      },
  ];

export const List = () => {
const [list, setList] = useState(COURSES);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            style={styles.containerList}
            data={list}
            renderItem={({ item }) => {
                return (
                    <View style={styles.containerItem}>
                
                <Image source={item.img} style={styles.image} />
                <Text>{item.title}</Text>
                </View>
                )
              }}
            keyExtractor={(item) => item.id}
             />
        </SafeAreaView>

    )

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    //   backgroundColor: "#ecf0f1",
    },
    containerList: {
        // flex: 1,
        width: '100%',
        // backgroundColor: "red",
      },
    image: {
        flex: 1,
        width: '100%', // Задайте ширину і висоту відповідно до вашого дизайну
        // height: 50,
      },
      containerItem: {
marginTop: 32,
      },
  });