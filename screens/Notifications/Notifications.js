import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Notifications extends React.Component {
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
          <Text style={baseStyle.h2}>Notifications</Text>
        </View>
        <ScrollView>
        <View style={styles.notificationWrapper}>
        <View style={styles.notificationBlock}>
        <View style={styles.innerBlock}>
           <View style={[baseStyle.row, {marginBottom: 5}]}>
              <Text style={baseStyle.h3}>
              Dinner for two special
              </Text>
              <Image
              style={styles.delIcon}
              source={require("../../assets/images/cross-bluebg.png")}
            />
           </View>
           <Text style={baseStyle.text}>
             Enjoy Miami's sunset from the best location. Join us in a two hour tour that will capture Miami essence.
           </Text>
         </View>   
        </View>
        <View style={styles.notificationBlock}>
        <View style={styles.innerBlock}>
           <View style={[baseStyle.row, {marginBottom: 5}]}>
              <Text style={baseStyle.h3}>
              Dinner for two special
              </Text>
              <Image
              style={styles.delIcon}
              source={require("../../assets/images/cross-bluebg.png")}
            />
           </View>
           <Text style={baseStyle.text}>
             Enjoy Miami's sunset from the best location. Join us in a two hour tour that will capture Miami essence.
           </Text>
         </View>   
        </View>
        <View style={styles.notificationBlock}>
        <View style={styles.innerBlock}>
           <View style={[baseStyle.row, {marginBottom: 5}]}>
              <Text style={baseStyle.h3}>
              Dinner for two special
              </Text>
              <Image
              style={styles.delIcon}
              source={require("../../assets/images/cross-bluebg.png")}
            />
           </View>
           <Text style={baseStyle.text}>
             Enjoy Miami's sunset from the best location. Join us in a two hour tour that will capture Miami essence.
           </Text>
         </View>   
        </View>
        </View>
        </ScrollView>
      </>
    );
  }
}

export default Notifications;

const styles = StyleSheet.create({
    notificationWrapper:{
        marginBottom: "15%"
    },
    notificationBlock:{
        marginTop: "5%",
        borderColor: "#D3D8EF",
        borderBottomWidth: 1
    },
    innerBlock:{
   paddingHorizontal: 20,
   paddingBottom: 15
    },
    delIcon:{
      width: 25,
      height: 25,
      resizeMode: "contain"
    },
});
