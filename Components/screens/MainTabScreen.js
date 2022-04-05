import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1bb76e',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={'white'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#1bb76e',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-notifications" color={'white'} size={20} />
          ),
          tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1bb76e',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={'white'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#1bb76e',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={'white'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#1bb76e',
     },
     headerTintColor: 'white',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Epicture',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} 
        backgroundColor='#1bb76e' onPress={() => navigation.openDrawer
        ()}></Icon.Button>
      )
     }} />
   </HomeStack.Navigator>
  );

const NotificationsStackScreen = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#1bb76e',
     },
     headerTintColor: 'white',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} 
        backgroundColor='#1bb76e' onPress={() => navigation.openDrawer
        ()}></Icon.Button>
      )
    }} />
   </NotificationsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#1bb76e',
     },
     headerTintColor: 'white',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} 
        backgroundColor='#1bb76e' onPress={() => navigation.openDrawer
        ()}></Icon.Button>
      )
    }} />
   </ProfileStack.Navigator>
);

const SettingsStackScreen = ({navigation}) => (
    <SettingsStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#1bb76e',
     },
     headerTintColor: 'white',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} 
        backgroundColor='#1bb76e' onPress={() => navigation.openDrawer
        ()}></Icon.Button>
      )
    }} />
   </SettingsStack.Navigator>
);