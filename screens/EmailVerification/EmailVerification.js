import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";

import baseStyle from "../../components/Styles";

class EmailVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pin1: "", pin2: "", pin3: "", pin4: "", pin5: "" };
  }
  ref1 = React.createRef();
  ref2 = React.createRef();
  ref3 = React.createRef();
  ref4 = React.createRef();
  ref5 = React.createRef();
  handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Backspace") {
    }
  };
  render() {
    const { pin1, pin2, pin3, pin4, pin5 } = this.state;
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
          <Text style={baseStyle.h2}>Email Verification</Text>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, styles.innerContainer]}>
            <Text style={[baseStyle.text, styles.innerStyle]}>
              We have sent a verification code to your registered email address.
            </Text>
            <Image
              style={styles.loginVector}
              source={require("../../assets/images/account-verification.png")}
            />
            <Text style={[baseStyle.text, {marginBottom: "5%"}]}>Enter your verification code</Text>
            <View style={baseStyle.row}>
              <TextInput
                ref={this.ref1}
                style={[baseStyle.input, styles.codeInput, baseStyle.shadow]}
                value={pin1}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref1.current.focus();
                  }
                }}
                onChangeText={(pin1) => {
                  this.setState({ pin1: pin1 });
                  this.ref2.current.focus();
                }}
              />
              <TextInput
                ref={this.ref2}
                style={[baseStyle.input, styles.codeInput, baseStyle.shadow]}
                value={pin2}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref1.current.focus();
                  }
                }}
                onChangeText={(pin2) => {
                  this.setState({ pin2: pin2 });
                  this.ref3.current.focus();
                }}
              />
              <TextInput
                ref={this.ref3}
                style={[baseStyle.input, styles.codeInput, baseStyle.shadow]}
                value={pin3}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref2.current.focus();
                  }
                }}
                onChangeText={(pin3) => {
                  this.setState({ pin3: pin3 });
                  this.ref4.current.focus();
                }}
              />
              <TextInput
                ref={this.ref4}
                style={[baseStyle.input, styles.codeInput, baseStyle.shadow]}
                value={pin4}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref3.current.focus();
                  }
                }}
                onChangeText={(pin4) => {
                  this.setState({ pin4: pin4 });
                  this.ref5.current.focus();
                }}
              />
              <TextInput
                ref={this.ref5}
                style={[baseStyle.input, styles.codeInput, baseStyle.shadow]}
                value={pin5}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    this.ref4.current.focus();
                  }
                }}
                onChangeText={(pin5) => {
                  this.setState({ pin5: pin5 });
                  // this.ref1.current.focus();
                }}
              />
            </View>
            <View 
             style={{ alignItems: "flex-end", width: "100%", marginTop: 15 }}
             >
            <TouchableOpacity
                style={baseStyle.blueButton}
                onPress={() =>   this.props.navigation.navigate("AddProfile")}
              >
                <Text style={baseStyle.blueBtnText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default EmailVerification;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "15%",
    alignItems: "center",
  },
  loginVector: {
    width: 171,
    height: 171,
    resizeMode: "contain",
    marginTop: "3%",
    marginBottom: "5%",
  },

  innerStyle: {
    textAlign: "center",
  },
  codeInput: {
    borderRadius: 8,
    width: "16%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0,
    alignContent: "center",
    textAlign: "center",
  },
});
