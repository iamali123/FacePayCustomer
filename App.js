import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./navigators/StackNavigation";

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );
  }
}