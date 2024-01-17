import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from "react-native-svg";


export const CustomTabIcon = ({ iconName, focused }) => {
    return (
      
        <View
          style={{
            backgroundColor: focused ? '#FF6C00' : 'transparent',
            borderRadius: 20,
            // padding: 10,
            width: 70,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgXml
            xml={iconName}
            
          />
        </View>
    );
  };
  
  