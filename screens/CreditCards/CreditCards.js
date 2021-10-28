import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  onPress,
  ImageBackground,
  PixelRatio,
} from "react-native";
import baseStyle, { color } from "../../components/Styles";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 750;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

var radio_props = [{ label: "Make Default", value: 0 }];

class CreditCards extends React.Component {
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
          <Text style={baseStyle.h2}>Credit Cards</Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("ScanCard")}
          style={baseStyle.nextbtn}>
            <Image
              style={baseStyle.backArrow}
              source={require("../../assets/images/plus-bluebg.png")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={baseStyle.container}>
            <Text style={[baseStyle.h2, { marginBottom: 8 }]}>
              Safe Payment, Happy you!
            </Text>
            <View style={styles.cardBlock}>
              <ImageBackground
                source={require("../../assets/images/credit-card.png")}
                style={styles.image}
                imageStyle={{
                  borderRadius: 10,
                }}
              ></ImageBackground>
              <View style={[baseStyle.row, styles.cardCtas]}>
                <TouchableOpacity
                  style={styles.cardlink}
                  onPress={() => this.props.navigation.navigate("Users")}
                >
                  <Image
                    style={styles.linkImg}
                    source={require("../../assets/images/users.png")}
                  />
                  <Text style={baseStyle.h6}>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("EditCreditCard")
                  }
                  style={styles.cardlink}
                >
                  <Image
                    style={styles.linkImg}
                    source={require("../../assets/images/edit.png")}
                  />
                  <Text style={baseStyle.h6}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("CardAssociatedStores")
                  }
                  style={styles.cardlink}
                >
                  <Image
                    style={styles.linkImg}
                    source={require("../../assets/images/stores.png")}
                  />
                  <Text style={baseStyle.h6}>Stores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardlink}>
                  <Image
                    style={styles.linkImg}
                    source={require("../../assets/images/trash.png")}
                  />
                  <Text style={baseStyle.h6}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardlink}>
                  <RadioForm formHorizontal={false} animation={true}>
                    {/* To create radio buttons, loop through your array of options */}
                    {radio_props.map((obj, i) => (
                      <RadioButton labelHorizontal={false} key={i}>
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={this.state.value3Index === i}
                          onPress={onPress}
                          borderWidth={1}
                          buttonInnerColor={"#292929"}
                          buttonOuterColor={
                            "#292929" 
                          }
                          buttonSize={10}
                          buttonOuterSize={15}
                          buttonStyle={{}}
                          buttonWrapStyle={{ marginBottom: 8 }}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={false}
                          onPress={onPress}
                          labelStyle={{
                            fontFamily: "PoppinsMedium",
                            fontSize: normalize(24),
                            color: "#292929",
                          }}
                          labelWrapStyle={{}}
                        />
                      </RadioButton>
                    ))}
                  </RadioForm>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default CreditCards;

const styles = StyleSheet.create({
  cardBlock: {
    backgroundColor: color.white,
    borderRadius: 10,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    marginBottom: 15,
  },
  cardlink: {
    marginHorizontal: 5,
    alignItems: "center",
  },
  linkImg: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  cardCtas: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  image: {
    resizeMode: "cover",
    height: 200,
    width: "100%",
  },
});
