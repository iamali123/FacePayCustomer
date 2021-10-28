import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

class EditCreditCard extends React.Component {
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
      active: false,
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
          <Text style={baseStyle.h2}>Credit Card Edit</Text>
        </View>
        <ScrollView>
          <View style={baseStyle.container}>
            <View style={[baseStyle.row, { alignItems: "center" }]}>
              <View>
                <Image
                  style={styles.cardIcon}
                  source={require("../../assets/images/credit-card.png")}
                />
              </View>
              <View>
                <Text style={baseStyle.text}>
                  Default Card **** **** ****3658
                </Text>
              </View>
            </View>
            <View style={[baseStyle.row, { alignItems: "center" }]}>
              <Text style={baseStyle.h4}>Set Limit</Text>
              <TextInput
                style={[baseStyle.input, styles.inputStyle]}
                value={this.state.customValue}
                placeholder="$200"
                placeholderTextColor={color.black}
                keyboardType="default"
                onChangeText={(value) => this.setState({ customValue: value })}
              />
            </View>
            <View style={styles.tipsBlock}>
              <Text style={baseStyle.h2}>Valid For</Text>
              <View style={styles.paymentTypes}>
                {this.state.validFor.map((data, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={
                        data.validFor
                          ? [
                              baseStyle.blueButton,
                              baseStyle.active,
                              styles.iconBtn,
                            ]
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
                            ? [
                                baseStyle.h4,
                                styles.textColor,
                                styles.activeText,
                              ]
                            : [baseStyle.h4, styles.textColor]
                        }
                      >
                        {data.Title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
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
                <Text style={baseStyle.blueBtnText}>Add Authorized Store</Text>
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

export default EditCreditCard;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: 185,
    width: "100%",
    marginBottom: 15,
  },
  inputStyle: {
    maxWidth: 130,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
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
    justifyContent: "center",
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
  cardIcon: {
    borderRadius: 10,
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
});
