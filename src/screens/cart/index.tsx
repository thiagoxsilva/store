// Libs
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

// Components
import { CartProductCard } from "../../components/CartProductCard";

// Hooks
import { useCart } from "../../hooks/useCart";

// Utils
import { currencyFormat } from "../../utils/formatter";

// Styles
import {
  Container,
  Header,
  Return,
  Icon,
  Title,
  Footer,
  Total,
} from "./styles";

type Props = NativeStackScreenProps<any, any>;

export function Cart({ navigation }: Props) {
  const { cart, total } = useCart();

  return (
    <Container>
      <Header>
        <Return onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" />
        </Return>
        <Title>Carrinho</Title>
      </Header>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartProductCard item={item} />}
      />
      <Footer>
        <Total>Total: {currencyFormat(total)}</Total>
      </Footer>
    </Container>
  );
}
