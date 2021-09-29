import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import Card from "../../components/Card";
import baseStyle, { color } from "../../components/Styles";

export default class ChangePassword extends Component {
  render() {
    return (
      <Card>
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
          <TextInput
            style={baseStyle.input}
            placeholder="Email"
            placeholderTextColor={color.eastbay}
            keyboardType="default"
          />
          <TouchableOpacity style={[baseStyle.blueButton, { width: "100%", marginTop: "10%" }]}>
            <Text style={baseStyle.blueBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
