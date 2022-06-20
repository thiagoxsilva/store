import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: ${RFValue(100)}px;

  align-items: center;
  justify-content: flex-end;

  border-bottom-width: 1px;
  border-bottom-color: #ffffff;
`;

export const Return = styled(TouchableOpacity)`
  position: absolute;

  left: ${RFValue(20)}px;
  bottom: 20%;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.title};

  margin-bottom: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  height: ${RFValue(70)}px;

  justify-content: center;
  align-items: flex-end;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Total = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};

  margin-right: 20px;
`;
