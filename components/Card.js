// import {from} from 'form-data';
import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import { color } from '../components/Styles'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.topWaveLayer}
        source={require("../assets/images/top-wave.png")}
      />
      {props.children}
      <Image
        style={styles.bottomWaveLayer}
        source={require("../assets/images/bottom-wave.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: color.zircon,
  },
  topWaveLayer: {
    width: windowWidth,
    height: windowHeight / 6,
    position: "absolute",
    top: 0,
    right: 0,
    resizeMode: "cover",
  },
  bottomWaveLayer: {
    width: windowWidth,
    height: windowHeight / 3,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1,
    resizeMode: "cover",
  },
});

export default Card;
