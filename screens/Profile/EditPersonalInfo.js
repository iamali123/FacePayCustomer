import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  Switch,
  TextInput
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import baseStyle from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class EditPersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            DOB: "",
            gender: "",
            email: "",
            phoneNo: "",
            address: "",
            city: "",
            State: "",
            zipcode: "",
            region: "",
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
            <Text style={baseStyle.h2}>Personal Info Edit</Text>
          </View>
          <ScrollView>
          <View style={baseStyle.container}>
          <TextInput
          style={baseStyle.input}
          value={this.state.firstName}
          placeholder="First Name"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ firstName: value })}
        />
                <TextInput
          style={baseStyle.input}
          value={this.state.lastName}
          placeholder="Last Name"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ lastName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.DOB}
          placeholder="Date of Birth"
          keyboardType="numeric"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ DOB: value })}
        />
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={this.state.gender}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ gender: itemValue })
            }
          >
            <Picker.Item
              style={baseStyle.pickerText}
              label="Male"
              value="Male"
            />
            <Picker.Item
              style={baseStyle.pickerText}
              label="Female"
              value="Female"
            />
          </Picker>
          <Image
            style={baseStyle.bottomDrop}
            source={require("../../assets/images/dropdown-icon.png")}
          ></Image>
        </View>
          <View style={[baseStyle.row, { alignItems: "center" }]}>
                <Text style={baseStyle.h4}>Additional Information</Text>
                <Switch
                  style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
                  trackColor={{ false: "#fff", true: "#fff" }}
                  thumbColor={"#292929"}
                  ios_backgroundColor="#292929"
                ></Switch>
            </View>
            <View style={[baseStyle.row, { marginVertical: 20 }]}>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[baseStyle.blueButton, styles.dualbtn]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
            <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ email: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.phoneNo}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ phoneNo: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.address}
          placeholder="Address"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ address: value })}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={[baseStyle.dropdownWrapper, styles.dualField]}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.city}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ city: itemValue })
              }
            >
              <Picker.Item
                style={baseStyle.pickerText}
                label="City"
                value="City"
              />
              <Picker.Item
                style={baseStyle.pickerText}
                label="London"
                value="London"
              />
            </Picker>
            <Image
              style={baseStyle.bottomDrop}
              source={require("../../assets/images/dropdown-icon.png")}
            ></Image>
          </View>
          <View style={[baseStyle.dropdownWrapper, styles.dualField]}>
            <Picker
              style={baseStyle.dropdown}
              selectedValue={this.state.State}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ State: itemValue })
              }
            >
              <Picker.Item
                style={baseStyle.pickerText}
                label="State"
                value="State"
              />
              <Picker.Item
                style={baseStyle.pickerText}
                label="London"
                value="London"
              />
            </Picker>
            <Image
              style={baseStyle.bottomDrop}
              source={require("../../assets/images/dropdown-icon.png")}
            ></Image>
          </View>
        </View>
        <TextInput
          style={baseStyle.input}
          value={this.state.zipcode}
          placeholder="Zip Code"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ zipcode: value })}
        />
                <TextInput
          style={baseStyle.input}
          value={this.state.region}
          placeholder="United States Of America"
          placeholderTextColor="#292929"
          onChangeText={(value) => this.setState({ region: value })}
        />
            <TouchableOpacity
                style={[baseStyle.blueButton, {width: "100%", marginTop: 10}]}
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={baseStyle.blueBtnText}>Save</Text>
              </TouchableOpacity>
          </View>
          </ScrollView>
        </>
    );
  }
}

export default EditPersonalInfo;

const styles = StyleSheet.create({
    dualbtn: {
        width: "46%",
        paddingLeft: 15,
        paddingRight: 15,
      },
      dualField: {
        width: "46%",
      },
});
