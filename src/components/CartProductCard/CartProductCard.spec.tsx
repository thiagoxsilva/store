import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { CartProductCard } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const product = {
  id: "1",
  createdAt: "2019-09-02T12:58:54.103Z",
  name: "Rustic Metal Fish",
  price: "289.00",
  image: "http://lorempixel.com/640/480/food",
  stock: 65171,
  quantity: 2,
};

describe("Cart Product Card Components", () => {
  it("should render product name", () => {
    const { getByTestId } = render(<CartProductCard item={product} />, {
      wrapper: Providers,
    });

    const name = getByTestId("product-name");

    expect(name.props.children).toEqual("Rustic Metal Fish");
  });

  it("should render product quantity", () => {
    const { getByTestId } = render(<CartProductCard item={product} />, {
      wrapper: Providers,
    });

    const quantity = getByTestId("product-quantity");

    expect(quantity.props.children).toEqual(2);
  });

  it("should render product price", () => {
    const { getByTestId } = render(<CartProductCard item={product} />, {
      wrapper: Providers,
    });

    const price = getByTestId("product-price");

    expect(price.props.children).toEqual("R$ 289.00");
  });

  it("should render product total", () => {
    const { getByTestId } = render(<CartProductCard item={product} />, {
      wrapper: Providers,
    });

    const price = getByTestId("product-total");

    expect(price.props.children).toContain("R$ 578.00");
  });
});
