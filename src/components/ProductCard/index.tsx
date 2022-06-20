// Libs
import React from "react";

// Hooks
import { useCart } from "../../hooks/useCart";

// Types
import { Product } from "../../types/product.types";

// Utils
import { currencyFormat } from "../../utils/formatter";

// Styles
import {
  Container,
  ProductImage,
  Name,
  Price,
  AddProductButton,
  ButtonText,
} from "./styles";

interface Props {
  item: Product;
}

export function ProductCard({ item }: Props) {
  const { addProductToCart } = useCart();

  return (
    <Container>
      <ProductImage source={{ uri: item.image }} resizeMode="contain" />
      <Name numberOfLines={2}>{item.title}</Name>
      <Price>{currencyFormat(item.price)}</Price>
      <AddProductButton onPress={() => addProductToCart(item)}>
        <ButtonText>comprar</ButtonText>
      </AddProductButton>
    </Container>
  );
}
