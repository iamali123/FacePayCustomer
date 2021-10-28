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
import baseStyle, {color} from "../../components/Styles";

class UserPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verifypin: "", pin: ""};
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
          <Text style={baseStyle.h2}>User PIN</Text>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, styles.innerContainer]}>
            <Text style={[baseStyle.h5, styles.innerStyle]}>
            Please set a PIN code to secure your  {"\n"} payments.
            </Text>
            <Image
              style={styles.loginVector}
              source={require("../../assets/images/account-verification.png")}
            />
            <Text style={[baseStyle.h5, {marginBottom: "5%"}]}>Enter Security PIN</Text>
            <TextInput
          style={baseStyle.input}
          value={this.state.pin}
          placeholder="Enter PIN"
          placeholderTextColor= {color.black}
          keyboardType="default"
          onChangeText={(value) => this.setState({ pin: value })}
        />
                    <TextInput
          style={baseStyle.input}
          value={this.state.verifypin}
          placeholder="Verify PIN"
          placeholderTextColor= {color.black}
          keyboardType="default"
          onChangeText={(value) => this.setState({ verifypin: value })}
        />
            <TouchableOpacity
                style={[baseStyle.blueButton, {width: "100%", marginTop: 15 }]}
                onPress={() =>   this.props.navigation.navigate("AddProfile")}
              >
                <Text style={baseStyle.blueBtnText}>Verify</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </>
    );
  }
}

export default UserPin;

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "8%",
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
});
