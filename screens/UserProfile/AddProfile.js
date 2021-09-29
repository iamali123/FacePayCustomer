import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Card from "../../components/Card";
import baseStyle from "../../components/Styles";
import ProfileForm from "./ProfileForm";

export default class AddProfile extends Component {
  render() {
    return (
      <Card>
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
          <TouchableOpacity style={baseStyle.nextbtn}>
            <Text style={baseStyle.h2}>Save</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, styles.innerContainer]}>
            <ProfileForm />
          </View>
        </ScrollView>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: "7%",
  },
});
