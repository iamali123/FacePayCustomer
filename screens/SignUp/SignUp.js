import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  CheckBox,
} from "react-native";

import baseStyle from "../../components/Styles";
import SignUpForm from "./SignUpForm";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessSelected: false,
      termsSelected: false,
      visible: false,
    };
  }

  _renderSinUpButton() {
    if (this.state.termsSelected) {
      return (
        <View style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}>
          <TouchableOpacity
            style={baseStyle.blueButton}
            onPress={() => {
              this.props.navigation.navigate("EmailVerification");
            }}
          >
            <Text style={baseStyle.blueBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }

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
          <Text style={baseStyle.h2}>Sign Up</Text>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, styles.innerContainer]}>
            <Image
              style={styles.loginVector}
              source={require("../../assets/images/login-vector.png")}
            />
            <SignUpForm />
            <View
              style={[baseStyle.row, { alignItems: "center", width: "100%" }]}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={baseStyle.text}>Accept</Text>
                <TouchableOpacity
                  style={{ marginHorizontal: 4 }}
                  onPress={() => {
                    this.props.navigation.navigate("PrivacyPolicy");
                  }}
                >
                  <Text style={baseStyle.text}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={baseStyle.text}>&</Text>
                <TouchableOpacity
                  style={{ marginLeft: 4 }}
                  onPress={() => {
                    this.props.navigation.navigate("TermsOfUse");
                  }}
                >
                  <Text style={baseStyle.text}>Terms of Use</Text>
                </TouchableOpacity>
              </View>
              <CheckBox
                value={this.state.termsSelected}
                onValueChange={(value) =>
                  this.setState({
                    termsSelected: value,
                  })
                }
                style={styles.checkbox}
              />
            </View>
            {this._renderSinUpButton()}
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "15%",
    alignItems: "center",
  },
  loginVector: {
    width: "100%",
    maxWidth: 300,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "8%",
  },
  checkbox: {
    alignSelf: "center",
  },
});
