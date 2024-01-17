
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "../Profile/Profile";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { PostScreen } from "../PostsScreen/PostsScreen";
import { SvgXml } from "react-native-svg";
import { CustomTabIcon } from '../shared/CustomTabIcon/CustomTabIcon'

const gridFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const gridOutline = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect width="24" height="24" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H10V10H3V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 3H21V10H14V3Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H21V21H14V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 14H10V21H3V14Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const userFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const userOutline = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const addFocused = `
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z" fill="white"/>
</svg>
`
const addOutline = `
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z" fill="#212121"/>
</svg>
`;

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
    // style={styles.container}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
      
          if (route.name === 'Profile') {
            iconName = focused ? gridFocused : gridOutline;
          } else if (route.name === 'CreatePostsScreen') {
            iconName = focused ? userFocused : userOutline;
          } else if (route.name === 'PostScreen') {
            iconName =focused ? addFocused : addOutline;
          }
         
          return <CustomTabIcon iconName={iconName} focused={focused} />;

        },
  tabBarActiveTintColor: '#FF6C00',
  tabBarInactiveTintColor: 'gray',
  
  tabBarStyle: styles.tabBarStyle , // Встановлення стилів для таббару
  // sceneContainerStyle: styles.sceneContainerStyle

  
})}
     
    >
       <Tabs.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarLabel: () => null }} />
       <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{ headerShown: false, tabBarLabel: () => null }}/>
       <Tabs.Screen name="PostScreen" component={PostsScreen} options={{ headerShown: false, tabBarLabel: () => null }}/>
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 54,
    paddingTop: 29,
    
  },
  sceneContainerStyle: {
    // Стилі для контейнера сцен
    // backgroundColor: 'red',
    // borderTopLeftRadius: 15, 
    // borderTopRightRadius: 15, 
    // justifyContent: "space-around",
  },
});

export default Home;



















































