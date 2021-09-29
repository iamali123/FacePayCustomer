import * as React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Landing from "../screens/Landing/Landing";
import Login from "../screens/Login/Login"
import ChangePassword from "../screens/PasswordRecovery/ChangePassword";
import SignUp from "../screens/SignUp/SignUp";
import EmailVerification from "../screens/EmailVerification/EmailVerification";
import AddProfile from "../screens/UserProfile/AddProfile";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../screens/TermsOfUse/TermsOfUse";
import Index from "../screens/Home/Index/Index";

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
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ChangePassword"
        component={ChangePassword}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="EmailVerification"
        component={EmailVerification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="AddProfile"
        component={AddProfile}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="TermsOfUse"
        component={TermsOfUse}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Index"
        component={Index}
      />
    </Stack.Navigator>
  );
};

