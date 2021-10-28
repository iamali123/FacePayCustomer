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
import { Picker } from "@react-native-picker/picker";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class NearMe extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    activeSections: [],
    status: "",
    searchInput: "",
    statusList: [
      { Title: "Pending", Id: 0 },
      { Title: "Completed", Id: 1 },
      { Title: "Status 1", Id: 2 },
      { Title: "Status 2", Id: 3 },
      { Title: "Status 3", Id: 4 },
    ],
    paymentMethod: "",
    paymentMethodList: [
      { Title: "Cash", Id: 0 },
      { Title: "Debit Card", Id: 1 },
      { Title: "Credit Crad", Id: 2 },
    ],
  };
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
          <Text style={baseStyle.h2}>Near Me</Text>
          <TouchableOpacity
            style={baseStyle.nextbtn}
          >
            <Image
              style={baseStyle.backArrow}
              source={require("../../assets/images/search-icon.png")}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterOptions}
          >
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker style={baseStyle.dropdown}>
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Rating"
                  value="Rating"
                />
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker
                style={baseStyle.dropdown}
                selectedValue={this.state.status}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ status: itemValue })
                }
              >
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Anytime"
                  value={null}
                />
                {this.state.statusList.map((data) => {
                  return (
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label={data.Title}
                      value={data.Id}
                      key={data.Id}
                    />
                  );
                })}
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker
                style={baseStyle.dropdown}
                selectedValue={this.state.paymentMethod}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ paymentMethod: itemValue })
                }
              >
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="24 hours"
                  value={null}
                />
                {this.state.paymentMethodList.map((data) => {
                  return (
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label={data.Title}
                      value={data.Id}
                      key={data.Id}
                    />
                  );
                })}
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker
                style={baseStyle.dropdown}
                selectedValue={this.state.paymentMethod}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ paymentMethod: itemValue })
                }
              >
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="open"
                  value={null}
                />
                {this.state.paymentMethodList.map((data) => {
                  return (
                    <Picker.Item
                      style={baseStyle.pickerText}
                      label={data.Title}
                      value={data.Id}
                      key={data.Id}
                    />
                  );
                })}
              </Picker>
              <Image
                style={baseStyle.bottomDrop}
                source={require("../../assets/images/dropdown-icon.png")}
              ></Image>
            </View>
          </ScrollView>
      </>
    );
  }
}

export default NearMe;

const styles = StyleSheet.create({
  filterOptions: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: "5%",
    marginBottom: "5%"
  },
  dropdownStyle: {
    width: 120,
    marginLeft: 10,
    paddingLeft: 12,
    paddingRight: 5,
  },
});
