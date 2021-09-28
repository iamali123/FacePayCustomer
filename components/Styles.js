import styled from "styled-components";
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

export const colors = {
  cornflower: "#6C63FF",
  eastbay: "#3F466F",
  black: "#000",
  white: "#fff",
  dovegray: "#707070",
  pelorous: "#49B7C4",
};

export const WelcomeContainer = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15%",
  marginBottom: "15%",
});
export const Text = styled.Text({
  fontFamily: "PoppinsLight",
  fontSize: normalize(26),
});
export const H1 = styled.Text({
  fontFamily: "PoppinsRegular",
  fontSize: normalize(48),
});
export const GeneralButton = styled.TouchableOpacity({
  backgroundColor: colors.pelorous,
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 12,
  paddingBottom: 8,
  color: "#fff",
  borderRadius: 50,
});
export const BtnText = styled.Text({
  color: "#fff",
  fontFamily: "PoppinsMedium",
  fontSize: normalize(32),
});
export default {
  verticalCenter: {
    alignItems: "center",
  },
  horizontalCenter: {
    justifyContent: "center",
  },
};
