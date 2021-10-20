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
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Text style={baseStyle.h2}>Personal Information</Text>
            <TouchableOpacity
              style={baseStyle.nextbtn}
              onPress={() =>
                this.props.navigation.navigate("EditPersonalInfo", {
                  nextRoute: "EditPersonalInfo",
                })
              }
            >
              <Text style={baseStyle.h2}>Edit</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.formContainer}>
              <View style={styles.profileContainer}>
                <ImageBackground
                  source={require("../../assets/images/team-member.png")}
                  style={styles.userImg}
                  imageStyle={{
                    borderRadius: 60,
                    borderWidth: 2,
                    borderColor: color.white
                  }}
                >
                  <TouchableOpacity style={styles.addUserbtn}>
                    <Image
                      style={styles.addUserImg}
                      source={require("../../assets/images/plus-bluebg.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <Text style={baseStyle.h2}>Sandra Smith</Text>
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>First Name:</Text>
                  <Text style={baseStyle.text}>Andrew Carnegie</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Last Name</Text>
                  <Text style={baseStyle.text}>Carnegie</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Date Of Birth</Text>
                  <Text style={baseStyle.text}>20/12/1995</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Gender</Text>
                  <Text style={baseStyle.text}>Male</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Email</Text>
                  <Text style={baseStyle.text}>andrew@facepay.com</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Phone Number</Text>
                  <Text style={baseStyle.text}>111 222 333</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Address</Text>
                  <Text style={baseStyle.text}>
                    7633, Holley Street Jackson, NJ 08527
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>City</Text>
                  <Text style={baseStyle.text}>California</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>State</Text>
                  <Text style={baseStyle.text}>California</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Zip Code</Text>
                  <Text style={baseStyle.text}>90011</Text>
                </View>
                <View style={styles.col}>
                  <Text style={baseStyle.h3}>Country</Text>
                  <Text style={baseStyle.text}>USA</Text>
                </View>
              </View>
              <View style={{marginHorizontal: 20}}>
              <TouchableOpacity
                style={[baseStyle.blueButton, {width: "100%", marginTop: 10}]}
                onPress={() => this.props.navigation.navigate("ChangePassword")}
              >
                <Text style={baseStyle.blueBtnText}>Change Passwords?</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
    );
  }
}

export default PersonalInformation;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: "8%",
    marginBottom: "15%",
  },
  profileContainer:{
      alignItems: "center",
  },
  col: {
    width: "50%",
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  userImg: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 15,
  },
  infoContainer: {
    marginTop: "8%",
    width: windowWidth - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  addUserImg: {
    width: 20,
    height: 20,
  },
  addUserbtn: {
    position: "absolute",
    top: 8,
    right: 12,
  },
});
