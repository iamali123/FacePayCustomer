import * as React from "react";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { DefaultTheme } from "@react-navigation/native";
import Landing from "../screens/Landing/Landing";
import Login from "../screens/Login/Login"
import ChangePassword from "../screens/PasswordRecovery/ChangePassword";
import SignUp from "../screens/SignUp/SignUp";
import EmailVerification from "../screens/EmailVerification/EmailVerification";
import AddProfile from "../screens/UserProfile/AddProfile";
import PrivacyPolicy from "../screens/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../screens/TermsOfUse/TermsOfUse";
import Index from "../screens/Home/Index/Index";
import ConfirmPassword from '../screens/PasswordRecovery/ConfirmPassword'
import ViewAllPromotions from "../screens/Home/PromotionAndOffers/ViewAllPromotions";
import SinglePromotion from "../screens/Home/PromotionAndOffers/SinglePromotion";
import PersonalInformation from "../screens/Profile/PersonalInformation";
import Support from "../screens/Support/Support"
import Referrals from "../screens/Referrals/Referrals"
import GoTouchless from "../screens/GoTouchless/GoTouchless"
import Transactions from "../screens/Transactions/Transactions"
import CreditCards from "../screens/CreditCards/CreditCards"
import Stores from "../screens/Stores/Stores"
import Users from "../screens/Users/Users"
import NearMe from "../screens/NearMe/NearMe"


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

  const navTheme = DefaultTheme;
  navTheme.colors.background = "#F1F2F8";

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
      
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ConfirmPassword"
        component={ConfirmPassword}
      />
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="ViewAllPromotions"
        component={ViewAllPromotions}
      />
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="SinglePromotion"
        component={SinglePromotion}
      />
       <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="GoTouchless"
        component={GoTouchless}
      />
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="PersonalInformation"
        component={PersonalInformation}
      />
            <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Transactions"
        component={Transactions}
      />
                  <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="CreditCards"
        component={CreditCards}
      />
                   <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Stores"
        component={Stores}
      />
                  <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Users"
        component={Users}
      />
                 <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="NearMe"
        component={NearMe}
      />
                    <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Referrals"
        component={Referrals}
      />
        <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
        name="Support"
        component={Support}
      />
    </Stack.Navigator>
  );
};

