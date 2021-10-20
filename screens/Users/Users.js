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

class Users extends React.Component {
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
          <Text style={baseStyle.h2}>Users</Text>
        </View>

      </>
    );
  }
}

export default Users;

const styles = StyleSheet.create({

});
