import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Button, Alert, StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '@react-navigation/native'


const SplashScreen = ({navigation}) => {
    const colors = useTheme();
    return (
        <View style={styles.container}>
             <StatusBar backgroundColor='#1bb76e' barStyle="white-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="3000"
                source={require('../../assets/logo_imgur.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View 
            style={[styles.footer, {
               // backgroundColor: colors.background
            }]}
            animation="fadeInUpBig">
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Stay connected with everyone !</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <Button title="Get Started ->" onPress={()=>navigation.navigate('SignInScreen')}/>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1bb76e'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
  });