import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  Switch,
  TextInput,
  ImageBackground
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class StoreDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTouchless: false,
          customValue: "",
          validFor: [
            { Title: " Mon", activeFilter: true, Id: 0 },
            { Title: "Tue", activeFilter: false, Id: 1 },
            { Title: "Wed", activeFilter: false, Id: 2 },
            { Title: "Thu", activeFilter: false, Id: 3 },
            { Title: "Fri", activeFilter: false, Id: 4 },
            { Title: "Sat", activeFilter: false, Id: 5 },
            { Title: "Sun", activeFilter: false, Id: 6 },
            { Title: "All Days", activeFilter: false, Id: 7 },
          ],
          active: false
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
            <Text style={baseStyle.h2}>Pollo Tropical</Text>
          </View>
          <ScrollView>
          <View style={baseStyle.container}>
          <ImageBackground
                source={require("../../assets/images/business-banner.png")}
                style={styles.image}
                imageStyle={{
                  borderRadius: 6,
                }}
              >
            </ImageBackground> 
            <View style={styles.tipsBlock}>
            <Text style={baseStyle.h2}>Payment Method</Text>
            <View style={[baseStyle.row, { alignItems: "center" }]}>
              <View>
                <Image
                  style={styles.cardIcon}
                  source={require("../../assets/images/credit-card.png")}
                />
              </View>
              <View style={{alignItems: "flex-end"}}>
                <Text style={baseStyle.text}>
                  Default Card **** **** ****3658
                </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CreditCards")}
            >
                <Text style={baseStyle.text}>
                   Change Card
                </Text>
            </TouchableOpacity>
            </View>
            </View>

            </View>
            <View style={styles.tipsBlock}>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Activate</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
            </View>
            <View style={styles.tipsBlock}>
              <Text style={baseStyle.h2}>Tips</Text>
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Decide on Site</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
              </View>
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
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Extra Tip</Text>
                <TextInput
                  style={[baseStyle.input, styles.inputStyle]}
                  value={this.state.customValue}
                  placeholder="0%"
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
              <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Set Limit</Text>
                <TextInput
                  style={[baseStyle.input, styles.inputStyle]}
                  value={this.state.customValue}
                  placeholder="$200"
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
              <Text style={baseStyle.h2}>Valid For</Text>
              <View style={styles.paymentTypes}>
              {this.state.validFor.map((data, index) => {
                return (
                    <TouchableOpacity key={index}
                      style={
                        data.validFor
                          ? [baseStyle.blueButton, baseStyle.active, styles.iconBtn]
                          : [baseStyle.blueButton, styles.iconBtn]
                      }
                      onPress={() => {
                        let validFor = [...this.state.validFor];
                        validFor[index] = {
                          ...validFor[index],
                          activeFilter:
                            !this.state.validFor[index].activeFilter,
                        };
                        this.setState({ validFor }, () =>
                          console.log(
                            this.state.validFor[index].activeFilter,
                            index
                          )
                        );
                      }}
                    >
                      <Text
                        style={
                          data.activeFilter
                            ? [baseStyle.h4, styles.textColor, styles.activeText]
                            : [baseStyle.h4, styles.textColor]
                        }
                      >
                        {data.Title}
                      </Text>
                    </TouchableOpacity>
                );
              })}
              </View>
              {/* <View style={styles.paymentTypes}>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn, baseStyle.active]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor, styles.activeText]}>
                Mon
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>
                Tue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
                      // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>
                Wed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Thu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Sat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>Sun</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[baseStyle.blueButton, styles.iconBtn]}
              // onPress={() => this.props.navigation.navigate("")}
            >
              <Text style={[baseStyle.h4, styles.textColor]}>
           All Days
              </Text>
            </TouchableOpacity>
          </View> */}
              </View>
              <View style={baseStyle.row}>
              <View style={styles.col}>
                <Text style={baseStyle.h4}>From</Text>
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
                    style={{ width: "100%", paddingRight: "10%" }}
                    placeholder="5:30pm"
                    placeholderTextColor="#292929"
                    keyboardType="default"
                  />
                  <TouchableOpacity
                    style={styles.faceButton}
                    onPress={() => {
                      // this.props.navigation.navigate();
                    }}
                  >
                    <Image
                      style={styles.faceIcon}
                      source={require("../../assets/images/time-picker-icon.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.col}>
                <Text style={baseStyle.h4}>To</Text>
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
                    style={{ width: "100%", paddingRight: "10%" }}
                    placeholder="6:30pm"
                    placeholderTextColor="#292929"
                    keyboardType="default"
                  />
                  <TouchableOpacity
                    style={styles.faceButton}
                    onPress={() => {
                      // this.props.navigation.navigate();
                    }}
                  >
                    <Image
                      style={styles.faceIcon}
                      source={require("../../assets/images/time-picker-icon.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[baseStyle.row, { marginTop: 20 }]}>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Delete Store</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>

          </ScrollView>
        </>
    );
  }
}

export default StoreDetail;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: 185,
    width: "100%",
    marginBottom: 15,
  },
  inputStyle: {
    maxWidth: 120,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },
  tipsBlock: {
    marginBottom: 15,
  },
  dualbtn: {
    width: "46%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  paymentTypes: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  iconBtn: {
    backgroundColor: color.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 7,
    paddingBottom: 4,
    borderColor: color.black,
    borderWidth: 1,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  textColor: {
    color: color.black,
    textAlign: "center",
  },
  activeText: {
    color: color.white,
  },
  cardIcon: {
    borderRadius: 10,
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  col: {
    width: "47%",
  },
  faceIcon: {
    width: 22,
    height: 22,
    alignSelf: "center",
    resizeMode: "contain",
  },
  faceButton: {
    position: "absolute",
    right: 15,
    alignSelf: "center",
  },
});
