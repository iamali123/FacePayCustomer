import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  Switch,
  TextInput,
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class GoTouchless extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTouchless: false,
      customValue: "",
    };
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
          <Text style={baseStyle.h2}>Go Touchless</Text>
        </View>
        <ScrollView>
          <View style={baseStyle.container}>
            <View style={[baseStyle.row, { alignItems: "center" }]}>
              {!this.state.activeTouchless && (
                <Text style={baseStyle.h4}>Activate Touchless</Text>
              )}
              {this.state.activeTouchless && (
                <Text style={baseStyle.h4}>Deactivate Touchless</Text>
              )}
              <Switch
                style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                trackColor={{ false: "#fff", true: "#fff" }}
                thumbColor={"#292929"}
                ios_backgroundColor="#292929"
                value={this.state.activeTouchless}
                onValueChange={(value) => {
                  this.setState({ activeTouchless: value });
                }}
              ></Switch>
            </View>
            <View style={styles.cardBlock}>
              <ImageBackground
                source={require("../../assets/images/credit-card.png")}
                style={styles.image}
                imageStyle={{borderRadius: 10}}
              ></ImageBackground>
              <TouchableOpacity
                style={{ alignItems: "flex-end" }}
                onPress={() => {
                  this.props.navigation.navigate("CreditCards");
                }}
              >
                <Text style={baseStyle.h6}>Edit Payment Method</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tipsBlock}>
              <Text style={baseStyle.h2}>Tips</Text>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Min of the Merchant</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Max of the Merchant</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Custom</Text>
                <TextInput
                  style={[baseStyle.input, styles.inputStyle]}
                  value={this.state.customValue}
                  placeholder="15%"
                  placeholderTextColor={color.black}
                  keyboardType="default"
                  onChangeText={(value) =>
                    this.setState({ customValue: value })
                  }
                />
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
            </View>
            <View style={styles.tipsBlock}>
              <Text style={baseStyle.h2}>Extra Tips</Text>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>No extra tips</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Custom</Text>
                <TextInput
                  style={[baseStyle.input, styles.inputStyle]}
                  value={this.state.customValue}
                  placeholder="3%"
                  placeholderTextColor={color.black}
                  keyboardType="default"
                  onChangeText={(value) =>
                    this.setState({ customValue: value })
                  }
                />
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
            </View>
            <Text style={baseStyle.text}>
              If your tip is lower than the merchant minimum, your amount will
              be updated at the payment.
            </Text>
            <TouchableOpacity
              style={[baseStyle.blueButton, { width: "100%", marginTop: 15 }]}
              onPress={() => this.props.navigation.navigate("Index")}
            >
              <Text style={baseStyle.blueBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default GoTouchless;

const styles = StyleSheet.create({
  cardBlock: {
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    resizeMode: "cover",
    height: 200,
    width: "100%",
    marginBottom: 15,
  },
  inputStyle: {
    maxWidth: 100,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },
  tipsBlock: {
    marginBottom: 15,
  },
});
