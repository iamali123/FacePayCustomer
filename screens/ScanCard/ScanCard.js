import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import baseStyle, {color} from "../../components/Styles";

class ScanCard extends React.Component {
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
          <Text style={baseStyle.h2}>Scan Card Front</Text>
        </View>
        <ScrollView>
          <View style={baseStyle.container}>
          <TouchableOpacity
                style={[baseStyle.blueButton, {width: "100%"}]}
                onPress={() => this.props.navigation.navigate("EnterCardManually")}
              >
                <Text style={baseStyle.blueBtnText}>Enter Card Manually</Text>
              </TouchableOpacity>
         </View>
        </ScrollView>
      </>
    );
  }
}

export default ScanCard;

const styles = StyleSheet.create({

});
