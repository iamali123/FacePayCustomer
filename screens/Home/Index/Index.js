import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
  } from "react-native";
  import baseStyle, { color } from "../../../components/Styles";

export default class Index extends Component {
    render() {
        return (
            <>
            <View style={baseStyle.topBar}>
              <Text style={baseStyle.h2}>Home</Text>
              <TouchableOpacity style={baseStyle.nextbtn}>
              <Image
              style={baseStyle.backArrow}
              source={require("../../../assets/images/search-icon.png")}
            />
          </TouchableOpacity>
            </View>
            <ScrollView>
        <View style={[styles.innerContainer, baseStyle.row, {alignItems: "center"}]}>
          <Text style={baseStyle.h2}>Promotions & Offers</Text>     
          <TouchableOpacity 
           onPress={() => this.props.navigation.navigate("ViewAllPromotions")}
          >
          <Text style={baseStyle.h3}>View All</Text>  
          </TouchableOpacity>  
        </View>
        {/* <View style={[baseStyle.container, {width: "100%", flexDirection: "row", flexWrap: "wrap", marginTop: "8%", marginLeft: -30, marginRight: -30 }]}>
           <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/search-icon.png")}
            />
        <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/search-icon.png")}
            />
  <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/search-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/search-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/search-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/search-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        </View> */}
         </ScrollView>
         </>
        )
    }
}


const styles = StyleSheet.create({
    innerContainer: {
      marginTop: "5%",
      flex: 1,
      paddingHorizontal: "5%",
      marginVertical: "5%",
    },
    pageBox:{
        borderRadius: 15,
        backgroundColor: color.white,
        alignItems: "center",
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 15,
        width: "33.333%"  
    },
    pageIcon:{
        resizeMode: "contain",
        width: 40,
        height: 40,
        marginBottom: 15
    }
  
  });