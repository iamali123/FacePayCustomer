import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import baseStyle, { color } from "../../components/Styles";


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          ShowPassword: true,
          visible: false,
        };
      }
    
      toggleSwitch() {
        this.setState({ ShowPassword: !this.state.ShowPassword });
      }
    
      _renderEyeButton() {
        if (this.state.visible) {
          return (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => {
                this.toggleSwitch();
              }}
            >
              <Image
                style={styles.faceIcon}
                source={
                  this.state.ShowPassword
                    ? require("../../assets/images/password-hide.png")
                    : require("../../assets/images/password-show.png")
                }
              ></Image>
            </TouchableOpacity>
          );
        } else {
          return null;
        }
      }
    render() {
        return (
            <>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor= {color.eastbay}
          keyboardType="default"
          onChangeText={(value) => this.setState({ email: value })}
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
            style={{ width: "100%", paddingRight: "28%" }}
            secureTextEntry={this.state.ShowPassword}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor= {color.eastbay}
            keyboardType="default"
            onChangeText={(value) =>
              this.setState({ password: value, visible: true })
            }
          />
          <TouchableOpacity
            style={styles.faceButton}
            onPress={() => {
              this.props.navigation.navigate("FaceDetection");
            }}
          >
            <Image
              style={styles.faceIcon}
              source={require("../../assets/images/faceIcon.png")}
            ></Image>
          </TouchableOpacity>
          {this._renderEyeButton()}
        </View>
         </>

        )
    }
}


const styles = StyleSheet.create({
    eyeButton: {
      position: "absolute",
      right: "23%",
      alignSelf: "center",
    },
    faceIcon: {
      width: 22,
      height: 22,
      resizeMode: "contain",
    },
    faceButton: {
      position: "absolute",
      right: "8%",
      alignSelf: "center",
    },

  });
  