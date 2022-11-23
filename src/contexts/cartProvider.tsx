// Libs
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Types
import { Product } from "../types/product.types";

export interface CartContextData {
  cart: Product[];
  quantity: number;
  total: number;
  addProductToCart: (item: Product) => void;
  removeProductFromCart: (item: Product) => void;
  deleteProductFromCart: (item: Product) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newQuantity = cart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    const newTotal = cart.reduce(
      (acc, product) => acc + product.quantity * +product.price,
      0
    );

    setTotal(newTotal);
    setQuantity(newQuantity);
  }, [cart]);

  function addProductToCart(item: Product) {
    const productExistOnCart = cart.find(
      (cartProduct) => cartProduct.id === item.id
    );

    if (!!productExistOnCart) {
      const newProduct = {
        ...productExistOnCart,
        quantity: productExistOnCart.quantity + 1,
      };

      const newCart = cart;
      newCart.splice(cart.indexOf(productExistOnCart), 1, newProduct);

      setCart([...newCart]);
    } else {
      const newProduct = { ...item, quantity: 1 };
      setCart((allProducts) => [...allProducts, newProduct]);
    }
  }

  function removeProductFromCart(item: Product) {
    const productOnCart = cart.find(
      (cartProduct) => cartProduct.id === item.id
    );

    if (productOnCart.quantity > 1) {
      const newProduct = {
        ...productOnCart,
        quantity: productOnCart.quantity - 1,
      };

      const newCart = cart;
      newCart.splice(cart.indexOf(productOnCart), 1, newProduct);

      setCart([...newCart]);
    } else {
      const newCart = cart;
      newCart.splice(cart.indexOf(item), 1);

      setCart([...newCart]);
    }
  }

  function deleteProductFromCart(item: Product) {
    const newCart = cart;
    newCart.splice(cart.indexOf(item), 1);

    setCart([...newCart]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        total,
        addProductToCart,
        removeProductFromCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
