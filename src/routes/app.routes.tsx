import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Store } from "../screens/store";
import { Cart } from "../screens/cart";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppStack.Screen name="Loja" component={Store} />
    <AppStack.Screen name="Carrinho" component={Cart} />
  </AppStack.Navigator>
);

export default AppRoutes;
