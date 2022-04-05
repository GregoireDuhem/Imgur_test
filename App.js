import React, { useEffect } from 'react';
import { 
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Components/screens/MainTabScreen';

import { AuthContext } from './Components/context';

import { DrawerContent } from './Components/screens/DrawerContent';

import AsyncStorage from '@react-native-async-storage/async-storage';

import RootStackScreen from './Components/screens/RootStackScreen';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
import ProfileScreen from './Components/screens/ProfileScreen';
import NotificationsScreen from './Components/screens/NotificationsScreen';
import SettingsScreen from './Components/screens/SettingsScreen';

const Drawer = createDrawerNavigator();


const App = () => {
  //  const [isLoading, setIsLoading] = React.useState(true);
  //  const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background : '#ffffff',
      text : '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background : '#333333',
      text : '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

const [loginState, dispach] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      // setUserToken('fefe');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if (userName == 'user' && password == 'pass') {
        userToken = 'dfgdfg';
        try {
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e) {
          console.log(e);
        }
      }
      console.log('user token:', userToken);
      dispach({ type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispach({ type: 'LOGOUT'});
    },
    signUp: () => {
      // setUserToken('fefe');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false); RETRIEVE_TOKEN | REGISTER
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e) {
        console.log(e);
      }
      // console.log('user token:', userToken);
      dispach({ type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }


  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {loginState.userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
        )
          :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;