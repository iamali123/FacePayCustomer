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
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Stores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      filterList: [
      { Title: " Fast Food", activeFilter: true, Id: 0 },
      { Title: "Hotels & Resorts", activeFilter: false, Id: 1 },
      { Title: "Grocery", activeFilter: false, Id: 2 },
    ],
    active: false
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
          <Text style={baseStyle.h2}>Your Stores</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SearchStore")}
            style={baseStyle.nextbtn}
          >
            <Image
              style={baseStyle.backArrow}
              source={require("../../assets/images/search-icon.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop:"5%"}}> 
        <View style={[baseStyle.row, styles.listViewFormat]}>
        <TouchableOpacity
              style={[baseStyle.blueButton, styles.saleBtn]}
              // onPress={() => this.props.navigation.navigate("AddStore")}
            >
            <Text style={baseStyle.blueBtnText}>Add Store</Text>
              <Image
                style={styles.btnIcon}
                source={require("../../assets/images/shop.png")}
              />
            </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                 onPress={() =>
                   this.props.navigation.navigate("HorizontalCardsStores")
                 }
              >
                <Image
                  style={styles.ViewIcon}
                  source={require("../../assets/images/list-view.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Stores")}
              >
                <Image
                  style={styles.ViewIcon}
                  source={require("../../assets/images/column-view.png")}
                />
              </TouchableOpacity>
          </View>
        </View>
        <Text style={[baseStyle.h3, styles.innerStyle]}>Filters</Text>
          <View style={baseStyle.filterList}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={baseStyle.categoriesList}>
                {this.state.filterList.map((data, index) => {
                  return (
                    <View style={baseStyle.categoriesList} key={index}>
                      <TouchableOpacity
                        style={
                          data.activeFilter
                            ? [baseStyle.catBtn, baseStyle.active]
                            : baseStyle.catBtn
                        }
                        onPress={() => {
                          let filterList = [...this.state.filterList];
                          filterList[index] = {
                            ...filterList[index],
                            activeFilter:
                              !this.state.filterList[index].activeFilter,
                          };
                          this.setState({ filterList }, () =>
                            console.log(
                              this.state.filterList[index].activeFilter,
                              index
                            )
                          );
                        }}
                      >
                        <Text
                          style={
                            data.activeFilter
                              ? [baseStyle.blueBtnText, styles.activeTextColor]
                              : [baseStyle.blueBtnText, styles.btnTextColor]
                          }
                        >
                          {data.Title}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          </View>
          <ScrollView>
            <View style={styles.storesWrapper}>
            <TouchableOpacity 
            style={styles.storeBlock}
            onPress={() =>
              this.props.navigation.navigate("StoreDetail")
            }>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/five-guys.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/pollotropical-logo.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/five-guys.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/White_Castle_logo.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/pollotropical-logo.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/pollotropical-logo.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/White_Castle_logo.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storeBlock}>
              <View style={styles.storeLogoWrap}>
              <Image
              style={styles.storeLogo}
              source={require("../../assets/images/White_Castle_logo.png")}
            />
              <Image
              style={styles.storeTick}
              source={require("../../assets/images/storeTick.png")}
            />
              </View>
                <Text style={[baseStyle.h3, styles.storeName ]}>Five Guys</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
      </>
    );
  }
}

export default Stores;

const styles = StyleSheet.create({
  innerStyle: {
    marginBottom: 5,
    marginLeft: 25,
  },
  btnTextColor: {
    color: color.black,
  },
  ViewIcon: {
    marginHorizontal: 5,
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
  saleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 7,
    paddingBottom: 7,
  },
  btnIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 5,
  },
  listViewFormat:{
   marginBottom: "8%",
   marginHorizontal: "5%",
   alignItems: "center"
  },
  storesWrapper:{
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: "5%",
    paddingBottom: "15%",
    paddingLeft: 12,
    paddingRight: 7
  },
  storeBlock:{
    width: "33.333%",
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 25
  },
  storeLogoWrap:{
    backgroundColor: color.white,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D8E0F3",
    borderWidth: 1,
    borderRadius: 10,
  },
  storeLogo:{
    resizeMode: "contain",
    width: "100%",
    height: 90
  },
  storeName:{
    paddingTop: 10,
    paddingRight: 10
  },
  storeTick:{
    position: "absolute",
    top: -10,
    right: -10,
    width: 25,
    height: 25
  }
});
