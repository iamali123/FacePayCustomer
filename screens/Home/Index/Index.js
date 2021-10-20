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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
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
        </ScrollView>
         <View style={{width: "100%", flexDirection: "row", flexWrap: "wrap", marginTop: "8%", paddingHorizontal: 12}}>
           <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/touchless-icon.png")}
            />
        <Text style={[baseStyle.h3, {textAlign: "center"}]}>Go Touchless</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/profile-icon.png")}
            />
  <Text style={[baseStyle.h3, {textAlign: "center"}]}>Profile</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/transactions-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Transactions</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/credit-cards-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Credit Cards</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/stores-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Stores</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/users-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Users</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/near-me-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Near Me</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/referrals-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Referrals</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[baseStyle.shadow, styles.pageBox]}>
           <Image
              style={styles.pageIcon}
              source={require("../../../assets/images/support-icon.png")}
            />
                <Text style={[baseStyle.h3, {textAlign: "center"}]}>Support</Text> 
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