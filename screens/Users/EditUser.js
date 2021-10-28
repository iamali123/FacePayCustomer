import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Switch,
  TextInput
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import baseStyle, { color } from "../../components/Styles";
import Stores from "../Stores/Stores"

class EditUser extends React.Component {
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
            information: true,
            changecard: false,
            stores: false,
        };
      }
  render() {
    return (
      <>
              <View style={styles.topBarWrapper}>
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
            <Text style={baseStyle.h2}>Edit Users</Text>
          </View>
          <View style={styles.productTabs}>
            <TouchableOpacity
             onPress={() => {
              this.setState({ information: true, changecard: false, stores: false });
            }}
          >
            <Text
              style={[
                this.state.information
                  ? [styles.active, baseStyle.h3, styles.tabBtn]
                  : [styles.textColor, baseStyle.h3, styles.tabBtn],
              ]}
            >
                Information
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              this.setState({ information: false, changecard: true, stores: false });
            }}
          >
            <Text
              style={[
                this.state.changecard
                  ? [styles.active, baseStyle.h3, styles.tabBtn]
                  : [styles.textColor, baseStyle.h3, styles.tabBtn],
              ]}
            >
            Change Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                  this.setState({ information: false, changecard: false, stores: true });
                }}
              >
                <Text
                  style={[
                    this.state.stores
                      ? [styles.active, baseStyle.h3, styles.tabBtn]
                      : [styles.textColor, baseStyle.h3, styles.tabBtn],
                  ]}
                >
                  Stores
              </Text>
            </TouchableOpacity>
          </View>
          </View>
          <ScrollView>
          <View style={baseStyle.container}>
          <View style={styles.profileContainer}>
          <ImageBackground
                  source={require("../../assets/images/team-member.png")}
                  style={styles.userImg}
                  imageStyle={{
                    borderRadius: 60,
                    borderWidth: 2,
                    borderColor: color.white,
                    backgroundColor: color.white
                  }}
                >
                  <TouchableOpacity style={styles.addUserbtn}>
                    <Image
                      style={styles.addUserImg}
                      source={require("../../assets/images/plus-bluebg.png")}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <Text style={baseStyle.h2}>Sandra Smith</Text>
              </View>
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


         {/* {!this.state.changeCard && (
            <ChangeCard navigation={this.props.navigation} />
          )}  */}
        {/* {!this.state.stores && (
            <Stores navigation={this.props.navigation} />
          )}  */}
          </View>
          </ScrollView>
        </>
    );
  }
}

export default EditUser;

const styles = StyleSheet.create({
    dualbtn: {
        width: "46%",
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "center"
      },
      dualField: {
        width: "46%",
      },  
      addUserImg: {
        width: 20,
        height: 20,
      },
      addUserbtn: {
        position: "absolute",
        top: 10,
        right: 10
        ,
      },
      userImg: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginBottom: 15,
      },
      profileContainer:{
        alignItems: "center",
        marginBottom: "5%"
      },
      productTabs: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 33,
        backgroundColor: "#F1F6FF",
        paddingVertical: 6,
      },
      active: {
        backgroundColor: color.black,
        color: color.white,
        borderRadius: 33,
      },
      tabBtn: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5,
      },
      textColor: {
        color: color.black,
      },
      topBarWrapper: {
        backgroundColor: color.white,
      },
});
