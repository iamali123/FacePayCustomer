import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Switch
} from "react-native";
import baseStyle, {color} from "../../components/Styles";

class EnterCardManually extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        cardNum: "",
        cvv: "",
        date: "",
        customValue: ""
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
          <Text style={baseStyle.h2}>Manual Card Setting</Text>
        </View>
        <ScrollView>
          <View style={baseStyle.container}>
          <TextInput
          style={baseStyle.input}
          value={this.state.name}
          placeholder="Name"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ name: value })}
        />
                <TextInput
          style={baseStyle.input}
          value={this.state.cardNum}
          placeholder="Card Number"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ cardNum: value })}
        />
                        <TextInput
          style={baseStyle.input}
          value={this.state.cvv}
          placeholder="CVV"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ cvv: value })}
        />
                <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
                    <View
                style={[
                  baseStyle.input,
                  {
                    flexDirection: "row",
                    position: "relative",
                    width: "47%",
                  },
                ]}
              >
                <TextInput
                  style={{ width: "100%", paddingRight: "10%" }}
                  placeholder="Expiry Month"
                  placeholderTextColor="#292929"
                  keyboardType="default"
                //   value={
                //     this.state.fromDate == ""
                //       ? this.state.fromDate
                //       : Moment(this.state.fromDate).format("MM/DD/YYYY")
                //   }
                //   editable={false}
                />
                <TouchableOpacity
                                // onPress={() => {
                                //     this.showDatepicker("fromDate");
                                //   }}
                  style={styles.faceButton}
                  onPress={() => {
                    // this.props.navigation.navigate();
                  }}
                >
                  <Image
                    style={styles.faceIcon}
                    source={require("../../assets/images/date-icon.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  baseStyle.input,
                  {
                    flexDirection: "row",
                    position: "relative",
                    width: "47%",
                    
                  },
                ]}
              >
                <TextInput
                  style={{ width: "100%", paddingRight: "10%" }}
                  placeholder="Expiry Year"
                  placeholderTextColor="#292929"
                  keyboardType="default"
                //   value={
                //     this.state.fromDate == ""
                //       ? this.state.fromDate
                //       : Moment(this.state.fromDate).format("MM/DD/YYYY")
                //   }
                //   editable={false}
                />
                <TouchableOpacity
                                // onPress={() => {
                                //     this.showDatepicker("fromDate");
                                //   }}
                  style={styles.faceButton}
                  onPress={() => {
                    // this.props.navigation.navigate();
                  }}
                >
                  <Image
                    style={styles.faceIcon}
                    source={require("../../assets/images/date-icon.png")}
                  ></Image>
                </TouchableOpacity>
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
          <TouchableOpacity
                style={[baseStyle.blueButton, {width: "100%", marginTop: 10}]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Save</Text>
              </TouchableOpacity>
         </View>
        </ScrollView>
      </>
    );
  }
}

export default EnterCardManually;

const styles = StyleSheet.create({
      inputStyle: {
        maxWidth: 120,
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 8,
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
