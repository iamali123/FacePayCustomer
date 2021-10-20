import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import baseStyle from "../../components/Styles";
import ProfileForm from "./ProfileForm";

export default class AddProfile extends Component {
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
          <Text style={baseStyle.h2}>User Profile</Text>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, styles.innerContainer]}>
            <ProfileForm />
            <TouchableOpacity
              style={[baseStyle.blueButton, { width: "100%", marginTop: 15 }]}
            >
              <Text style={baseStyle.blueBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "7%",
  },
});
