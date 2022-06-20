import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  padding: 10px;

  flex-direction: row;
  margin: 5px;
`;

export const ProductImage = styled.Image`
  height: ${RFValue(100)}px;
  width: ${RFValue(100)}px;
`;

export const Info = styled.View`
  flex: 1;

  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;

  max-width: 90%;
`;

export const DeleteProductButton = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Delete = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Add = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;

export const Quantity = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Remove = styled(Add)`
  font-size: ${RFValue(20)}px;
`;

export const Prices = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Price = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Total = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
