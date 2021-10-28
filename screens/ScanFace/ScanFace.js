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

class ScanFace extends React.Component {
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
          <Text style={baseStyle.h2}>Scan Your Face</Text>
        </View>
        <ScrollView>
          <View style={[baseStyle.container, {alignItems: "center"}]}>
         <Text style={baseStyle.text}>Please look at the camera nad hold still</Text>
         </View>
        </ScrollView>
      </>
    );
  }
}

export default ScanFace;

const styles = StyleSheet.create({

});
