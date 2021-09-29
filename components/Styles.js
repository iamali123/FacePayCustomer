import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scale = SCREEN_WIDTH / 750;

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const color = {
  cornflower: "#6C63FF",
  eastbay: "#3F466F",
  black: "#000",
  white: "#fff",
  dovegray: "#707070",
  pelorous: "#49B7C4",
  zircon: "#F5F7FF",
  linkwater: "#D8E0F3",
};

export default {
  color,
  text: {
    fontFamily: "PoppinsLight",
    fontSize: normalize(26),
  },
  h1: {
    fontFamily: "PoppinsRegular",
    fontSize: normalize(48),
  },
  h2: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(34),
  },
  h3: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(30),
  },
  h4: {
    fontFamily: "PoppinsRegular",
    fontSize: normalize(28),
  },
  h5: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(26),
  },
  h6: {
    fontFamily: "PoppinsMedium",
    fontSize: normalize(24),
  },

  blueButton: {
    backgroundColor: color.pelorous,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 8,
    color: color.white,
    borderRadius: 50,
  },
  blueBtnText: {
    color: color.white,
    fontFamily: "PoppinsMedium",
    fontSize: normalize(32),
    textAlign: "center",
  },
  input: {
    height: 50,
    maxWidth: 595,
    width: "100%",
    marginBottom: 12,
    borderColor: color.linkwater,
    borderWidth: 2,
    padding: 10,
    backgroundColor: color.white,
    borderRadius: 50,
    fontSize: normalize(28),
    color: color.eastbay,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  topBar: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
  backbtn: {
    position: "absolute",
    left: 20,
    top: 0,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  nextbtn: {
    position: "absolute",
    right: 20,
    top: 0,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    marginBottom: "15%",
  },
  container: {
    flex: 1,
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "5%",
    marginBottom: "15%",
  },
};
