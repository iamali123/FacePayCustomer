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
      selectedLanguage: "",
      firstName: "",
      lastName: "",
      dob: "",
      city: "",
      State: "",
      zipCode: "",
      gender: "",
      email: "",
      phoneNo: "",
      address: "",
      country: "",
    };
  }
  render() {
    return (
      <>
        <TextInput
          style={baseStyle.input}
          value={this.state.firstName}
          placeholder="First Name"
          placeholderTextColor={color.eastbay}
          onChangeText={(value) => this.setState({ firstName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.lastName}
          placeholder="Last Name"
          placeholderTextColor={color.eastbay}
          onChangeText={(value) => this.setState({ lastName: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.dob}
          placeholder="Date of Birth"
          placeholderTextColor={color.eastbay}
          onChangeText={(value) => this.setState({ dob: value })}
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
              label="Male"
              value="Male"
            />
            <Picker.Item label="Female" value="Female" />
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
          placeholderTextColor={color.eastbay}
          onChangeText={(value) => this.setState({ email: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.phoneNo}
          placeholder="Phone Number"
          placeholderTextColor={color.eastbay}
          onChangeText={(value) => this.setState({ phoneNo: value })}
        />
        <TextInput
          style={baseStyle.input}
          value={this.state.address}
          placeholder="Address"
          placeholderTextColor={color.eastbay}
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
              <Picker.Item label="City" value="City" />
              <Picker.Item label="London" value="London" />
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
              <Picker.Item label="State" value="State" />
              <Picker.Item label="London" value="London" />
            </Picker>
            <Image
              style={baseStyle.bottomDrop}
              source={require("../../assets/images/dropdown-icon.png")}
            ></Image>
          </View>
        </View>
        <TextInput
          style={baseStyle.input}
          value={this.state.zipCode}
          placeholder="Zip Code"
          placeholderTextColor={color.eastbay}
          onChangeText={(value) => this.setState({ zipCode: value })}
        />
        <View style={baseStyle.dropdownWrapper}>
          <Picker
            style={baseStyle.dropdown}
            selectedValue={this.state.country}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ country: itemValue })
            }
          >
            <Picker.Item
              label="United State of America"
              value="United State of America"
            />
            <Picker.Item label="London" value="London" />
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
    width: "47%",
  },
  mt: {
    marginTop: 15,
    marginBottom: 10,
    textAlign: "left",
  },
});
