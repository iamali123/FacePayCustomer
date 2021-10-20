import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    ImageBackground
  } from "react-native";
  import baseStyle, { color } from "../../../components/Styles";

export default class SinglePromotion extends Component {
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
              source={require(".././../../assets/images/back-arrow.png")}
            />
          </TouchableOpacity>
              <Text style={baseStyle.h2}>Promotion</Text>
            </View>
            <ScrollView>
                <View style={[baseStyle.container, styles.innerContainer]}>
          <View 
          style={styles.promotionBlock}
          >
               <ImageBackground
                source={require("../../../assets/images/promotion-thumb.png")}
                style={styles.image}
                imageStyle={{
                  borderRadius: 6,
                }}
              >
              <View style={styles.discountBadge}>
               <Text style={[baseStyle.h6, styles.discountValue]}>15% off</Text>
              </View>
              <View style={styles.dateRange}>
               <Text style={[baseStyle.h4, styles.dateText]}>July 23 - July 26</Text>
              </View>
                </ImageBackground> 
            <View style={styles.contentBlock}>
            <Text style={[baseStyle.h2, styles.mb ]}>Polo Tropical</Text>  
            <Text style={[baseStyle.h3, styles.mb ]}>Salad with sprays...</Text> 
            <View style={[baseStyle.row,  {justifyContent: "flex-start", marginBottom: "5%"}]}>
            <Text style={[baseStyle.h3, styles.oldPrice]}>$15.25</Text> 
            <Text style={[baseStyle.h3, styles.newPrice]}>$13.25</Text> 
            </View>
            <Text style={[baseStyle.h2, styles.mb ]}>Details</Text>  
            <Text style={[baseStyle.text, {marginBottom: "5%"} ]}>Fresh peppermint mixed with choco, and blended cream</Text> 
            <View style={[baseStyle.row, styles.mb]}>        
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                Valid Date / Till
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                01/01/21 - 01/01/21
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>        
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                Till Time
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                06:30 - 8:30pm
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>        
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                Valid Age
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                18 - 65 Years
                </Text>
              </View>
              <View style={[baseStyle.row, styles.mb]}>        
                <Text style={[baseStyle.h3, styles.alignLeft]}>
                Valid Range
                </Text>
                <Text style={[baseStyle.text, styles.alignRight]}>
                15 Miles
                </Text>
              </View>
            </View>
          </View>  
          </View>
          </ScrollView>
         </>
        )
    }
}


const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    marginTop: "10%",
    marginRight: 8
  },
  image: {
    resizeMode: "cover",
    height: 185,
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
     paddingBottom: 15
  },
  promotionBlock:{
    maxWidth: 475,
    paddingBottom: 30
  },
  contentBlock:{
    paddingTop: 15
  },
  discountBadge:{
    backgroundColor: color.red,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    top: -20,
    right: -20,
    borderColor: "#F1F2F8",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingTop: 5
  },
  discountValue:{
    color: color.white,
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 11
  },
  dateRange:{
    backgroundColor: "#000000cc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 15
  },
  dateText:{
    color: color.white,
  },
  newPrice:{
    color: color.red,
  },
  oldPrice:{
    color: color.palma,
    paddingRight: 10,
    textDecorationLine: "line-through"
  },
  mb:{
    marginBottom: 7
  },
  alignRight: {
    textAlign: "right",
    width: "50%",
    paddingRight: 15
  },
  alignLeft: {
    textAlign: "left",
    width: "50%",
  },
  
  });