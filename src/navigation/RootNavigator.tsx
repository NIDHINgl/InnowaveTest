import React from "react";
import { DefaultTheme, NavigationContainer,DarkTheme } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import {useSelector} from 'react-redux';
import { TouchableOpacity } from "react-native";
import Dashboard from "../screens/Dashboard";
import Details from "../screens/DeviceDetails";
import DeviceInput from "../screens/DeviceInput";
import BackIcon from '../assets/back-black.svg';

const HEADER_HEIGHT = 110;
const Stack = createStackNavigator();


const screenOptions = {
  gestureEnabled: false,
  headerStyle: {
    height: HEADER_HEIGHT,
  },
  headerTitle: () => null,
//   headerRight: () => <BtnOptions />,
  gestureDirection: 'vertical-inverted',

  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
};

export default function RootNavigator() {
  const mode = useSelector((state:any) => state.darkMode);

  return (
    <NavigationContainer
    //   ref={navigationRef}
      theme={mode ? DarkTheme : DefaultTheme}>
     
        <Stack.Navigator >
        <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={(props:any) => ({
              headerShown: true,
              ...screenOptions,
              ...props,
            })}
          />
          <Stack.Screen
              name="Details"
              component={Details}
              options={(props:any) => ({
                headerShown: false,
                ...screenOptions,
                ...props,
              })}
            />
            <Stack.Screen
              name="DeviceInput"
              component={DeviceInput}
              options={(props:any) => ({
                headerShown: true,
                ...screenOptions,
                ...props,
                headerLeft: (navigation:any) => (
                  <TouchableOpacity style={{marginLeft:'5%'}} onPress={event => navigation.onPress(event)}>
                    <BackIcon />
                  </TouchableOpacity>
                ),
              })}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}