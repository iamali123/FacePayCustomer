import * as React from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import Card from "../../components/Card";
import * as Animatable from "react-native-animatable";
import {
  WelcomeContainer,
  H1,
  Text,
  GeneralButton,
  BtnText,
} from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <WelcomeContainer>
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
              <H1>Customer</H1>
            </Animatable.View>
            <Text style={styles.welcomeDesc}>
              The best part of ordering stuff online, the packages. It's like
              recieving a present every time on order shows up at your door.
            </Text>
            <Animatable.View animation="slideInLeft">
              <GeneralButton
                style={styles.btnStyle}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <BtnText>Getting Started</BtnText>
              </GeneralButton>
            </Animatable.View>
          </View>
        </WelcomeContainer>
      </Card>
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
  },
  customerVector: {
    resizeMode: "contain",
    width: windowWidth,
    height: windowHeight / 3,
    marginBottom: "5%",
    marginLeft: "5%",
  },
  content: {
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  welcomeDesc: {
    marginBottom: 25,
  },
  btnStyle: {
    maxWidth: "300px",
    width: "100%",
  },
});
