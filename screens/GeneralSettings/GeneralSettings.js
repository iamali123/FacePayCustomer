import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  Switch,
  Dimensions
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import baseStyle, {color} from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class GeneralSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
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
          <Text style={baseStyle.h2}>General Settings</Text>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, {marginBottom: "0%"}]}>
          <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Allow Notifications</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Unblock Account</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Show Promotions</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Authorized Stores  <Image
              style={styles.questionIcon}
              source={require("../../assets/images/question-icon.png")}
               />
                </Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Language</Text>
                <View style={[baseStyle.dropdownWrapper, {maxWidth: 170, width: "100%"}]}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item
              style={baseStyle.pickerText}
              label="English"
              value="English"
            />
            <Picker.Item
              style={baseStyle.pickerText}
              label="Spanish"
              value="Spanish"
            />
          </Picker>
          <Image
            style={baseStyle.bottomDrop}
            source={require("../../assets/images/dropdown-icon.png")}
          ></Image>
        </View>
              </View>
              <View style={[baseStyle.row, { marginTop: 20 }]}>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.navigate("SecurityPin")}
              >
                <Text style={baseStyle.blueBtnText}>Security PIN</Text>
                <Image
                style={styles.btnIcon}
                source={require("../../assets/images/whitebg-true.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.navigate("UserPin")}
              >
                <Text style={baseStyle.blueBtnText}>User PIN</Text>
                <Image
                style={styles.btnIcon}
                source={require("../../assets/images/whitebg-true.png")}
              />
              </TouchableOpacity>
            </View>
            <Image
              style={styles.settingsVector}
              source={require("../../assets/images/settings-banner.png")}
            />
         </View>
        </ScrollView>
      </>
    );
  }
}

export default GeneralSettings;

const styles = StyleSheet.create({
  dualbtn: {
    width: "46%",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8,
  },
  settingsVector:{
    width: "100%",
    maxWidth: 400,
    height: 300,
    resizeMode: "contain",
    marginTop: "8%",
  },
  questionIcon:{
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  btnIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 5,
  },
});
