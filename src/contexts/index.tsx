import React, { ReactNode } from "react";

import { CartProvider } from "./cartProvider";

interface CartProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: CartProviderProps) {
  return <CartProvider>{children}</CartProvider>;
}
