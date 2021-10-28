import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  Switch
} from "react-native";
import baseStyle, { color } from "../../components/Styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TeamMembersList: [
        { name: "Sandra Smith", type: "owner", active: false, Id: 0 },
        { name: "Victor Smith", type: "member", active: true, Id: 1 },
        { name: "Sandra Smith", type: "owner", active: false, Id: 2 },
        { name: "Sandra Smith", type: "owner", active: false, Id: 3 },
        { name: "Sandra Smith", type: "owner", active: false, Id: 4 },
      ],
      filterList: [
        { Title: " Manager", activeFilter: true, Id: 0 },
        { Title: "Employee", activeFilter: false, Id: 1 },
        { Title: "Pollo Tropical", activeFilter: false, Id: 2 },
      ],
      active: false,
      searchInput: "",
    };
  }
  toggle(value, index) {
    let TeamMembersList = [...this.state.TeamMembersList];
    TeamMembersList[index] = {
      ...TeamMembersList[index],
      active: value,
    };
    this.setState({ TeamMembersList }, () =>
      console.log(this.state.TeamMembersList[index].active, index)
    );
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
          <Text style={baseStyle.h2}>Users</Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddUser")}
            style={baseStyle.nextbtn}
          >
            <Image
              style={baseStyle.backArrow}
              source={require("../../assets/images/plus-bluebg.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
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
          <ScrollView>
            {this.state.TeamMembersList.map((data, index) => {
              return (
                <View style={styles.switchBlock} key={index}>
                  <View style={styles.switchInner}>
                    <Image
                      style={styles.memberImg}
                      source={require("../../assets/images/team-member.png")}
                    />
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={styles.introCol}>
                          <Text style={baseStyle.h4}>{data.name}</Text>
                          <Text style={baseStyle.h6}>*** *** *** 3658</Text>
                        </View>
                        <View style={styles.rightCol}>
                          <Switch
                            style={{
                              transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], marginVertical: -10,
                            }}
                            trackColor={{ false: "#D8E0F3", true: "#D8E0F3" }}
                            thumbColor={"#292929"}
                            ios_backgroundColor="#292929"
                            value={data.active}
                            onValueChange={(value) => this.toggle(value, index)}
                          ></Switch>

                          <Text style={[baseStyle.h3, { textAlign: "right" }]}>
                            (Pollo Tropical)
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          baseStyle.row,
                          { marginTop: 10, justifyContent: "flex-end" },
                        ]}
                      >
                        <TouchableOpacity
                          style={[baseStyle.editDelButton]}
                          onPress={() =>
                            this.props.navigation.navigate("EditUser")
                          }
                        >
                          <Text style={baseStyle.blueBtnText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[baseStyle.editDelButton, { marginLeft: 12 }]}
                        >
                          <Text style={baseStyle.blueBtnText}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default Users;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flex: 1,
  },
  switchBlock: {
    marginBottom: 15,
    flex: 1,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  switchInner: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: color.white,
    borderRadius: 5,
  },

  memberImg: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    marginRight: 15,
    borderRadius: 5,
  },

  dotsIcon: {
    width: 20,
    height: 8,
  },
  innerStyle: {
    marginBottom: 5,
    marginLeft: 25,
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
  btnTextColor: {
    color: color.black,
  },
  rightCol: {
    marginLeft: 30,
  },
  btnStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
});
