import * as React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { DefaultTheme } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Landing from "../screens/Landing/Landing";
import Login from "../screens/Login/Login"

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }


  return (
    <Stack.Navigator initialRouteName="Landing" backBehavior="initialRoute">
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Landing"
        component={Landing}
      />
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

