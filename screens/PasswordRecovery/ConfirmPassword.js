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
export default class ConfirmPassword extends Component {
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
          <View
            style={[
              baseStyle.input,
              {
                flexDirection: "row",
                position: "relative",
              },
            ]}
          >
            <TextInput
              style={{ width: "100%", paddingRight: "15%" }}
              placeholder="Password"
              placeholderTextColor={color.eastbay}
              keyboardType="default"
            />
            <TouchableOpacity style={styles.faceButton}>
              <Image
                style={styles.faceIcon}
                source={require("../../assets/images/password-show.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={[
              baseStyle.input,
              {
                flexDirection: "row",
                position: "relative",
              },
            ]}
          >
            <TextInput
              style={{ width: "100%", paddingRight: "15%" }}
              placeholder="Confirm Password"
              placeholderTextColor={color.eastbay}
              keyboardType="default"
            />
            <TouchableOpacity style={styles.faceButton}>
              <Image
                style={styles.faceIcon}
                source={require("../../assets/images/password-show.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[baseStyle.blueButton, { width: "100%", marginTop: "5%" }]}
          >
            <Text style={baseStyle.blueBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    marginTop: "8%"
  },
  faceButton: {
    position: "absolute",
    right: "8%",
    alignSelf: "center",
  },
  faceIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  loginVector: {
    width: "100%",
    maxWidth: 400,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "8%",
  },
});
