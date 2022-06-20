import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  margin-bottom: 15px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;

export const CartContainer = styled(TouchableOpacity)`
  position: absolute;
  right: 20px;
  bottom: 18px;
`;

export const Products = styled.Text`
  position: absolute;
  top: -10px;
  right: -10px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(18)}px;
`;
