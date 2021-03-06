import * as React from "react";
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text } from "react-native";

import * as Animatable from "react-native-animatable";
import baseStyle from '../../components/Styles'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View style={baseStyle.welcomeContainer}>
          <Animatable.View animation="slideInDown">
            <Image
              source={require("../../assets/images/emoji.png")}
              style={styles.image}
            ></Image>
          </Animatable.View>
          <Animatable.View animation="slideInRight">
            <Image
              source={require("../../assets/images/customer-vector.png")}
              style={styles.customerVector}
            ></Image>
          </Animatable.View>
          <View style={styles.content}>
            <Animatable.View animation="slideInLeft">
              <Text style={[baseStyle.h1, {textAlign: "center"}]}>Customer</Text>
            </Animatable.View>
            <Text style={[baseStyle.text, styles.welcomeDesc]}>
              The best part of ordering stuff online, the packages. It's like
              recieving a present every time on order shows up at your door.
            </Text>
            <Animatable.View animation="slideInLeft" style={{width: "100%"}}>
              <TouchableOpacity
              style={[baseStyle.blueButton, {width: "100%"}]}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={baseStyle.blueBtnText}>Getting Started</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
      </>
    );
  }
}

export default Landing;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: windowWidth / 3,
    height: windowHeight / 6,
    marginBottom: "5%",
alignSelf: "center"
  },
  customerVector: {
    resizeMode: "contain",
    width: windowWidth,
    height: windowHeight / 3,
    marginBottom: "5%",
    marginLeft: "8%",
  },
  content: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  welcomeDesc: {
    marginBottom: 25,
    textAlign: "center"
  },
});
