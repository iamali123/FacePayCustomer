import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ToastAndroid,
  Share,
  TextInput
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Referrals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "http://facepay.com/share/32..." };
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
          <Text style={baseStyle.h2}>Referrals</Text>
        </View>
        <View style={baseStyle.container}>
          <Image
            style={styles.loginVector}
            source={require("../../assets/images/referrals-banner.png")}
          />
          <Text style={baseStyle.h2}>Share with your friends</Text>
          <Text style={baseStyle.text}>
            Share with your friends. If they sign up, you and your{"\n"}friend
            will get special offers for free!
          </Text>
          <View style={styles.referralForm}>
            <TextInput
              style={baseStyle.input}
              value={this.state.link}
              editable={false}
            />
            <TouchableOpacity
              style={styles.copyButton}
              onPress={() => {
                Clipboard.setString(this.state.link);
                ToastAndroid.show("Link Copied!", ToastAndroid.SHORT);
              }}
            >
              <Text style={styles.btnText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[baseStyle.blueButtonMain, { width: "100%", marginTop: 10 }]}
            onPress={() => this.onShare()}
          >
            <Text style={baseStyle.blueBtnText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Referrals;

const styles = StyleSheet.create({
  loginVector: {
    width: windowWidth - 40,
    height: windowHeight / 3,
    resizeMode: "contain",
    marginBottom: "7%",
  },
  referralForm: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  copyButton: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#292929",
    position: "absolute",
    right: 0,
    paddingTop: 8.5,
    paddingBottom: 8.5,
  },
  btnText:{
    color: "#fff",
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    textAlign: "center",
  }
});
