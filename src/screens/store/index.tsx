// Libs
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

// Components
import { ProductCard } from "../../components/ProductCard";

// Hooks
import { useCart } from "../../hooks/useCart";

// Services
import api from "../../services/api";

// Types
import { Product } from "../../types/product.types";

// Styles
import {
  Container,
  Header,
  Title,
  CartContainer,
  Products,
  Icon,
} from "./styles";

type Props = NativeStackScreenProps<any, any>;

export function Store({ navigation }: Props) {
  const [products, setProducts] = useState([] as Product[]);

  const { quantity } = useCart();

  async function fetchAllProducts() {
    try {
      const { data } = await api.get("/products", {retry: 3, retryDelay: 3000});;

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Lojinha</Title>
        <CartContainer onPress={() => navigation.navigate("Carrinho")}>
          <Products>{quantity}</Products>
          <Icon name="shopping-cart" />
        </CartContainer>
      </Header>
      <FlatList
        data={products}
        numColumns={3}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: getBottomSpace() }}
      />
    </Container>
  );
}
