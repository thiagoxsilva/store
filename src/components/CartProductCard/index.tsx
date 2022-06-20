//Libs
import React from "react";
import { TouchableOpacity, View } from "react-native";

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
  Info,
  Name,
  DeleteProductButton,
  Delete,
  Actions,
  Add,
  Quantity,
  Remove,
  Prices,
  Price,
  Total,
} from "./styles";

interface Props {
  item: Product;
}

export function CartProductCard({ item }: Props) {
  const { addProductToCart, removeProductFromCart, deleteProductFromCart } =
    useCart();

  return (
    <Container>
      <ProductImage
        source={{ uri: item.image }}
        resizeMode="contain"
        testID="product-image"
      />
      <Info>
        <Name testID="product-name">{item.title}</Name>
        <DeleteProductButton onPress={() => deleteProductFromCart(item)}>
          <Delete name="x" />
        </DeleteProductButton>
        <Actions>
          <TouchableOpacity onPress={() => removeProductFromCart(item)}>
            <Add name="minus-circle" />
          </TouchableOpacity>
          <Quantity testID="product-quantity">{item.quantity}</Quantity>
          <TouchableOpacity onPress={() => addProductToCart(item)}>
            <Remove name="plus-circle" />
          </TouchableOpacity>
        </Actions>
        <Prices>
          <Price testID="product-price">{currencyFormat(item.price)}</Price>
          <Total testID="product-total">
            Total: {currencyFormat(+item.price * item.quantity)}
          </Total>
        </Prices>
      </Info>
    </Container>
  );
}
