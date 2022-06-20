import styled from "styled-components/native";

import { Image, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(180)}px;

  flex-grow: 1;
  flex-basis: 0;

  background-color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 15px;

  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  margin: 4px;
  padding: 15px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: ${RFValue(60)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const AddProductButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.secondary_light};

  padding: 5px 10px;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`;
