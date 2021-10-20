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
              <Text style={baseStyle.h2}>Promotions & Offers</Text>
              <TouchableOpacity style={baseStyle.nextbtn}>
              <Image
              style={baseStyle.backArrow}
              source={require("../../../assets/images/search-icon.png")}
            />
          </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={baseStyle.container}>
          <TouchableOpacity 
          style={styles.promotionBlock}
           onPress={() => this.props.navigation.navigate("SinglePromotions")}
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
            <Text style={baseStyle.h2}>Polo Tropical</Text>  
            <View style={baseStyle.row}>
            <Text style={baseStyle.h3}>Salad with sprays...</Text> 
            <View style={[baseStyle.row, {justifyContent: "flex-end"}]}>
            <Text style={[baseStyle.h3, styles.oldPrice]}>$15.25</Text> 
            <Text style={[baseStyle.h3, styles.newPrice]}>$13.25</Text> 
            </View>
              </View>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity 
          style={styles.promotionBlock}
           onPress={() => this.props.navigation.navigate("SinglePromotions")}
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
            <Text style={baseStyle.h2}>Polo Tropical</Text>  
            <View style={baseStyle.row}>
            <Text style={baseStyle.h3}>Salad with sprays...</Text> 
            <View style={[baseStyle.row, {justifyContent: "flex-end"}]}>
            <Text style={[baseStyle.h3, styles.oldPrice]}>$15.25</Text> 
            <Text style={[baseStyle.h3, styles.newPrice]}>$13.25</Text> 
            </View>
              </View>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity 
          style={styles.promotionBlock}
           onPress={() => this.props.navigation.navigate("SinglePromotions")}
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
            <Text style={baseStyle.h2}>Polo Tropical</Text>  
            <View style={baseStyle.row}>
            <Text style={baseStyle.h3}>Salad with sprays...</Text> 
            <View style={[baseStyle.row, {justifyContent: "flex-end"}]}>
            <Text style={[baseStyle.h3, styles.oldPrice]}>$15.25</Text> 
            <Text style={[baseStyle.h3, styles.newPrice]}>$13.25</Text> 
            </View>
              </View>
            </View>
          </TouchableOpacity> 
          </View>
          </ScrollView>
         </>
        )
    }
}


const styles = StyleSheet.create({
    innerContainer: {
      flex: 1,
      paddingHorizontal: "5%",
      marginTop: "5%",
    },
    pageBox:{
        borderRadius: 6,
        backgroundColor: color.white,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 20,
        marginHorizontal: 8,
        width: "28.5%"  
    },
    pageIcon:{
        resizeMode: "contain",
        width: 45,
        height: 45,
        marginBottom: 10
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
      width: 280,
      marginLeft: 20,
      paddingTop: 25,
    },
    contentBlock:{
      paddingTop: 15
    },
    oldPrice:{
      paddingRight: 10
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
    }
  
  });