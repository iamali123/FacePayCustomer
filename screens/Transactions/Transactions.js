import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  TextInput
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import baseStyle, { color } from "../../components/Styles";
import Accordion from "react-native-collapsible/Accordion";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Transactions extends React.Component {
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
    transactions: [
      {
        title: "Robert Johnson",
        content: "US-3166",
        AC: "**** **** ****123456789",
        date: "01/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: "ID: 85965451",
        address: "123 Main St - Miami Beach, FL 33141",
      },
      {
        title: "Borak Obama",
        content: "US-54785",
        AC: "123456789",
        date: "02/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: "ID: 85965452",
      },
      {
        title: "Robert Johnson",
        content: "US-3166",
        AC: "123456789",
        date: "03/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: "ID: 85965453",
      },
      {
        title: "Robert Johnson",
        content: "US-3166",
        AC: "123456789",
        date: "04/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: "ID: 85965454",
      },
      {
        title: "Borak Obama",
        content: "US-54785",
        AC: "123456789",
        date: "05/10/21",
        time: "12:25 pm",
        amount: "246.8",
        TransID: "ID: 85965455",
      },
    ],
  };
}
  _renderHeader = (section) => {
    return (
      <View style={styles.switchRow}>
        <View style={styles.switchInner}>
          <View style={styles.outerWrapper}>
          <View style={styles.storeLogoWrapper}>
          <Image
              style={styles.storeLogo}
              source={require("../../assets/images/White_Castle_logo.png")}
            />
          </View>
          </View>
          <View style={{width: "70%", flex: 1, marginLeft: 10}}>
          <View style={baseStyle.row}>
          <View style={{width: "50%", paddingRight: 10}}>
          <Text style={baseStyle.h2}>{section.title}</Text>
          </View>
          <View style={{width: "50%", justifyContent: "flex-end", flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={baseStyle.h6}>{section.date}</Text>
              <Text style={[baseStyle.h6, {paddingLeft: 10}]}>
                {section.time}
              </Text>
          </View>
          </View>
            <Text style={baseStyle.h5}>{section.content}</Text>
            <View style={baseStyle.row}>
            <View style={{width: "50%", paddingRight: 10}}>
            <Text style={baseStyle.h5}>{section.AC}</Text>
            </View>
            <View style={{width: "50%"}}>
            <Text style={[baseStyle.h3, styles.priceColor]}>
              ${section.amount}
            </Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <>
        <View style={styles.total}>
          <Text style={baseStyle.h5}>{section.TransID}</Text>
          <Text style={[baseStyle.h5, {marginBottom: 5}]}>{section.address}</Text>
          <View style={{ paddingBottom: 15 }}>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h5}>Amount</Text>
              <Text style={baseStyle.h5}>$10.00</Text>
            </View>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h5}>Tax (7.5%)</Text>
              <Text style={baseStyle.h5}>$0.75</Text>
            </View>
            <View style={baseStyle.row}>
              <Text style={baseStyle.h5}>Tip (15%)</Text>
              <Text style={baseStyle.h5}>$1.50</Text>
            </View>
          </View>
        </View>
        <View style={styles.totalAmount}>
          <Text style={[baseStyle.h5, styles.mr]}>Total Amount</Text>
          <Text style={baseStyle.h5}>$10.00</Text>
        </View>
      </>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };
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
          <Text style={baseStyle.h2}>Transactions</Text>
        </View>
        <View style={styles.filterSection}>
        <View
              style={
                {
                  flexDirection: "row",
                 position: "relative",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
            >
              <TextInput
                style={[baseStyle.input,{paddingRight: 30}]}
                placeholder="Search"
                placeholderTextColor="#292929"
                keyboardType="default"
                value={this.state.searchInput}
                onChangeText={(value) => {
                  this.setState({ searchInput: value });
                }}
              />
              <TouchableOpacity
                style={styles.faceButton}
                onPress={() => {
                  this.setState({ searchInput: "" });
                }}
              >
                <Image
                  style={styles.faceIcon}
                  source={require("../../assets/images/search-icon.png")}
                ></Image>
              </TouchableOpacity>
            </View>
   
        <Text style={[baseStyle.h3, styles.innerStyle]}>Filters</Text>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterOptions}
          >
            <View style={[baseStyle.dropdownWrapper, styles.dropdownStyle]}>
              <Picker style={baseStyle.dropdown}>
                <Picker.Item
                  style={baseStyle.pickerText}
                  label="Date"
                  value="Date"
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
                  label="Status"
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
                  label="Payment Method"
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
          </View>
          <ScrollView>
          <Accordion
            sections={this.state.transactions}
            activeSections={[0]}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            underlayColor="transparent"
          />
          </ScrollView>
      </>
    );
  }
}

export default Transactions;

const styles = StyleSheet.create({
  filterSection:{
    marginTop: "5%",
    marginBottom: "5%",
  },
  filterOptions: {
    flexDirection: "row",
    marginLeft: 10
  },
  innerStyle: {
    marginBottom: 5,
    marginLeft: 25,
  },
  dropdownStyle: {
    width: 120,
    marginLeft: 10,
    paddingLeft: 12,
    paddingRight: 5,
  },
  faceIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  faceButton: {
    position: "absolute",
    right: 20,
    top: 9
  },
  switchRow: {
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  switchInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  total: {
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  totalAmount: {
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
  },
  mr: {
    marginRight: 15,
  },

  switchWrapper: {
    borderColor: "#3F466F",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  priceColor: {
    color: "#129516",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  storeLogo:{
    resizeMode: "contain",
    width: "100%",
    height: 70
  },
  storeLogoWrapper:{
    backgroundColor: color.white,
    borderColor: "#D8E0F3",
    borderWidth: 1,
    padding: 12,
    borderRadius: 73,
  },
  outerWrapper:{
    width: "30%",
  }
});
