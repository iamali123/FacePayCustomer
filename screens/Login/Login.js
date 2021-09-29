import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import Card from "../../components/Card";
import baseStyle, { color } from "../../components/Styles";
import LoginForm from './LoginForm'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class Login extends Component {
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
                <Text style={baseStyle.text}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            <View
              style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}
            >
              <TouchableOpacity
                style={baseStyle.blueButton}
                onPress={() => this.props.navigation.navigate("Index")}
              >
                <Text style={baseStyle.blueBtnText}>Log In</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomContent}>
                <Text style={baseStyle.text}>
                 Not a Member?
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={[baseStyle.text, styles.innerStyle]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
          </Card>
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
    flexDirection: "row",
    justifyContent: "center"
  },
  innerStyle:{
    marginLeft: 7,
    color: color.pelorous
  }
});
