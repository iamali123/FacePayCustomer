import * as React from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      ShowConfirmPassword: true,
      ShowPassword: true,
    };
  }
  togglePasswordSwitch() {
    this.setState({ ShowPassword: !this.state.ShowPassword });
  }

  toggleConfirmPasswordSwitch() {
    this.setState({ ShowConfirmPassword: !this.state.ShowConfirmPassword });
  }

  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor= {color.black}
          keyboardType="email-address"
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
            style={{ width: "100%", paddingRight: 30 }}
            secureTextEntry={this.state.ShowPassword}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor= {color.black}
            keyboardType="default"
            onChangeText={(value) => this.setState({ password: value })}
          />
          <TouchableOpacity
            style={styles.faceButton}
            onPress={() => {
              this.togglePasswordSwitch();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={
                this.state.ShowPassword
                  ? require("../../assets/images/password-show.png")
                  : require("../../assets/images/password-hide.png")
              }
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
            style={{ width: "100%", paddingRight: 30 }}
            secureTextEntry={this.state.ShowConfirmPassword}
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor= {color.black}
            keyboardType="default"
            onChangeText={(value) => this.setState({ confirmPassword: value })}
          />
          <TouchableOpacity
            style={styles.faceButton}
            onPress={() => {
              this.toggleConfirmPasswordSwitch();
            }}
          >
            <Image
              style={styles.faceIcon}
              source={
                this.state.ShowConfirmPassword
                  ? require("../../assets/images/password-show.png")
                  : require("../../assets/images/password-hide.png")
              }
            ></Image>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  faceIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  faceButton: {
    position: "absolute",
    right: "5%",
    alignSelf: "center",
  },
});
