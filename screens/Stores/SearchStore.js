import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

class SearchStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }
  render() {
    return (
      <>
        <View style={styles.topBar}>
          <View
            style={[
              baseStyle.input,
              {
                flexDirection: "row",
                position: "relative",
                backgroundColor: "#F1F6FF",
                borderColor: "#E5EDF9",
              },
            ]}
          >
            <TouchableOpacity
              style={styles.searchLeftIcon}
              onPress={() => {
                this.setState({ searchInput: "" });
                // this.props.navigation.goBack();
              }}
            >
              <Image
                style={baseStyle.backArrow}
                source={require("../../assets/images/search-icon.png")}
              />
            </TouchableOpacity>
            <TextInput
              style={{ width: "100%", paddingRight: "8%", paddingLeft: 15 }}
              // value={this.state.password}
              placeholder="Search"
              placeholderTextColor="#292929"
              keyboardType="default"
              value={this.state.searchInput}
              onChangeText={(value) => this.setState({ searchInput: value })}
            />
            <TouchableOpacity
              style={styles.faceButton}
              onPress={() => {
                this.setState({ searchInput: "" });
                this.props.navigation.goBack();
              }}
            >
              <Image
                style={styles.faceIcon}
                source={require("../../assets/images/cross-bluebg.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View style={styles.filteredProducts}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={[
                baseStyle.row,
                { alignItems: "center", marginBottom: 20 },
              ]}
            >
              <Text style={baseStyle.h4}>White Castle</Text>
              <Image
                style={styles.rightArrow}
                source={require("../../assets/images/icon-arrow-left.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={[
                baseStyle.row,
                { alignItems: "center", marginBottom: 20 },
              ]}
            >
              <Text style={baseStyle.h4}>White Castle</Text>
              <Image
                style={styles.rightArrow}
                source={require("../../assets/images/icon-arrow-left.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={[
                baseStyle.row,
                { alignItems: "center", marginBottom: 20 },
              ]}
            >
              <Text style={baseStyle.h4}>White Castle</Text>
              <Image
                style={styles.rightArrow}
                source={require("../../assets/images/icon-arrow-left.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={[
                baseStyle.row,
                { alignItems: "center", marginBottom: 20 },
              ]}
            >
              <Text style={baseStyle.h4}>White Castle</Text>
              <Image
                style={styles.rightArrow}
                source={require("../../assets/images/icon-arrow-left.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default SearchStore;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filteredProducts: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },

  topBar: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: "15%",
    paddingBottom: 5,
    backgroundColor: color.white,
  },
  faceIcon: {
    width: 25,
    height: 25,
    alignSelf: "center",
  },
  faceButton: {
    position: "absolute",
    right: "5%",
    alignSelf: "center",
  },
  searchLeftIcon: {
    position: "absolute",
    left: 13,
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  rightArrow: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
