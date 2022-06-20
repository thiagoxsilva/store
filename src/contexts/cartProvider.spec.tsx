import { renderHook, act } from "@testing-library/react-hooks";
import { useCart } from "../hooks/useCart";
import { CartProvider } from "./cartProvider";

const product = {
  id: "1",
  createdAt: "2019-09-02T12:58:54.103Z",
  name: "Rustic Metal Fish",
  price: "289.00",
  image: "http://lorempixel.com/640/480/food",
  stock: 65171,
};

describe("Cart Hook", () => {
  it("should product be added to cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(() => result.current.addProductToCart(product));

    expect(result.current.cart).toEqual([{ ...product, quantity: 1 }]);
  });

  it("should product be added to cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(() => result.current.addProductToCart(product));

    expect(result.current.cart).toEqual([{ ...product, quantity: 1 }]);
  });

  it("should product quantity increase if product already exists on  cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(() => result.current.addProductToCart(product));
    await act(() => result.current.addProductToCart(product));

    expect(result.current.cart).toEqual([{ ...product, quantity: 2 }]);
  });

  it("should product quantity decrease", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(() => result.current.addProductToCart(product));
    await act(() => result.current.addProductToCart(product));
    await act(() => result.current.removeProductFromCart(product));

    expect(result.current.cart).toEqual([{ ...product, quantity: 1 }]);
  });

  it("should product be remove from cart if quantity is decrease and equal 1", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(() => result.current.addProductToCart(product));
    await act(() => result.current.removeProductFromCart(product));

    expect(result.current.cart).toEqual([]);
  });

  it("should delete product from cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(() => result.current.addProductToCart(product));
    await act(() => result.current.addProductToCart(product));
    await act(() => result.current.deleteProductFromCart(product));

    expect(result.current.cart).toEqual([]);
  });
});
