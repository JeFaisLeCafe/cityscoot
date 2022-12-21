import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;
