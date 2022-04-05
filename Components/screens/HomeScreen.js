import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { useTheme } from '@react-navigation/native'


const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme ();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top'}}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content"}/>
          <Text style={{ color: colors.text}}>Home Screen</Text>
        <TextInput
        underlineColorAndroid='transparent' placeholder="Search"
        style={{height: 40, borderColor: 'black', borderWidth: 0.5, width: 200}}
        />
      </View>
    );
  };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;