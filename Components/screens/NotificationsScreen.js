import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>NotificationsScreen</Text>
        <Button
          title="Go to Notifications Screen....again"
          onPress={() => navigation.push("Notifications")}
          />
          <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />
          <Button
          title="Go back"
          onPress={() => navigation.goBack()}
          />
      </View>
    );
  };

  export default NotificationsScreen;