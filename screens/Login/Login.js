import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Text } from "react-native";

import baseStyle, { color } from "../../components/Styles";
import LoginForm from './LoginForm'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class Login extends Component {
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
          </View>
          <ScrollView>
          <View style={[baseStyle.container, styles.innerContainer]}>
            <Image
              style={styles.loginVector}
              source={require("../../assets/images/login-vector.png")}
            />
            <LoginForm />
            <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ChangePassword")
                }
              >
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, {width: "100%", marginTop: 10}]}
                onPress={() => this.props.navigation.navigate("Index")}
              >
                <Text style={baseStyle.blueBtnText}>Log In</Text>
              </TouchableOpacity>

            <View style={styles.bottomContent}>
                 <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Text style={baseStyle.text}>
                Don’t you have an account? 
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={baseStyle.text}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("PasswordRecovery")
                }
              >
                <Text style={baseStyle.text}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
          </>
        )
    }
}

const styles = StyleSheet.create({
  innerContainer:{
   marginTop: "15%",
  },
  loginVector: {
    width: "100%",
    maxWidth: 400,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "8%",
  },
  bottomContent: {
    marginTop: "15%",
    alignItems: "center"
  },
  innerStyle:{
    marginLeft: 7,
    color: color.pelorous
  }
});
