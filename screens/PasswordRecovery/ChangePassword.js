import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Dimensions
} from "react-native";

import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class ChangePassword extends Component {
  render() {
    return (
      <>
        <View style={baseStyle.topBar}>
          <TouchableOpacity
            style={baseStyle.backbtn}
            onPress={() => this.props.navigation.goBack()}
          >
            <Image
              style={baseStyle.backArrow}
              source={require("../../assets/images/back-arrow.png")}
            />
          </TouchableOpacity>
          <Text style={baseStyle.h2}>Change Password</Text>
        </View>
        <View style={[baseStyle.container, styles.innerContainer]}>
        <Image
              style={styles.loginVector}
              source={require("../../assets/images/login-vector.png")}
            />
          <TextInput
            style={baseStyle.input}
            placeholder="Email"
            placeholderTextColor={color.eastbay}
            keyboardType="default"
          />
          <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ConfirmPassword");
              }}
          style={[baseStyle.blueButton, { width: "100%", marginTop: "5%" }]}>
            <Text style={baseStyle.blueBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "8%",
    alignItems: "center"
  },
  loginVector: {
    width: "100%",
    maxWidth: 400,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "8%",
  },
});
