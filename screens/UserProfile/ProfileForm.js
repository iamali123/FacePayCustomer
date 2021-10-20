import * as React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
  } from "react-native";
import baseStyle, {color} from "../../components/Styles";
import { Picker } from "@react-native-picker/picker";

class ProfileForm extends React.Component {
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
        <TextInput
          style={baseStyle.input}
          value={this.state.firstName}
          placeholder="First Name"
          placeholderTextColor= {color.black}
          onChangeText={(value) => this.setState({ firstName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.lastName}
          placeholder="Last Name"
          placeholderTextColor= {color.black}
          onChangeText={(value) => this.setState({ lastName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.DOB}
          placeholder="Date of Birth"
          placeholderTextColor= {color.black}
          onChangeText={(value) => this.setState({ DOB: value })}
        />
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            mode="dropdown"
            style={baseStyle.dropdown}
            selectedValue={this.state.gender}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ gender: itemValue })
            }
          >
            <Picker.Item
              style={baseStyle.pickerText}
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
        <Text style={[baseStyle.h2, styles.mt]}>Contact Infromation</Text>
        <TextInput
          style={baseStyle.input}
          value={this.state.email}
          placeholder="Email"
          placeholderTextColor= {color.black}
          onChangeText={(value) => this.setState({ email: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.phoneNo}
          placeholder="Phone"
          placeholderTextColor= {color.black}
          onChangeText={(value) => this.setState({ phoneNo: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.address}
          placeholder="Address"
          placeholderTextColor= {color.black}
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
          placeholderTextColor= {color.black}
          onChangeText={(value) => this.setState({ zipcode: value })}
        />
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            mode="dropdown"
            style={baseStyle.dropdown}
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ region: itemValue })
            }
          >
            <Picker.Item
              style={baseStyle.pickerText}
              label="United States Of America"
              value="United States Of America"
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
      </>
    );
  }
}

export default ProfileForm;
const styles = StyleSheet.create({
  dualField: {
    width: "46%",
  },
  mt: {
    marginTop: 15,
    marginBottom: 10,
    textAlign: "left",
  },
});
