import { createContext, ReactNode, useState } from "react";
import {
  Cart,
  CartCustomIceCream,
  CartIceCream,
  ICartContext,
} from "../interfaces";

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: ICartProviderProps) {
  const [cartItems, setCartItems] = useState<Cart>({
    iceCreams: [],
    customIceCreams: [],
  });

  const addIceCreamToCart = (cartItem: CartIceCream) => {
    if (cartItems.iceCreams.some((ic) => ic.id === cartItem.id)) {
      addIceCreamAmount(cartItem.id, 1);
    } else {
      setCartItems((prev) => {
        return {
          ...prev,
          iceCreams: [...prev.iceCreams, cartItem],
        };
      });
    }
  };

  const addCustomIceCreamToCart = (cartItem: CartCustomIceCream) => {
    setCartItems((prev) => {
      return {
        ...prev,
        customIceCreams: [...prev.customIceCreams, cartItem],
      };
    });
  };

  const removeIceCreamFromCart = (id: number) => {
    setCartItems((prev) => {
      return {
        ...prev,
        iceCreams: [...prev.iceCreams.filter((i) => i.id !== id)],
      };
    });
  };

  const removeCustomIceCreamFromCart = (id: number) => {
    setCartItems((prev) => {
      return {
        ...prev,
        customIceCreams: [...prev.customIceCreams.filter((i) => i.id !== id)],
      };
    });
  };

  const updateIceCreamToCart = (id: number, amount: number) => {
    setCartItems((prev) => {
      return {
        ...prev,
        iceCreams: prev.iceCreams.map((i) =>
          i.id === id ? { ...i, amount: amount } : i
        ),
      };
    });
  };

  const updateCustomIceCreamToCart = (id: number, amount: number) => {
    setCartItems((prev) => {
      return {
        ...prev,
        customIceCreams: prev.customIceCreams.map((i) =>
          i.id === id ? { ...i, amount: amount } : i
        ),
      };
    });
  };

  const addIceCreamAmount = (id: number, amountToAdd: number) => {
    const ic = cartItems.iceCreams.find((ic) => ic.id === id);
    updateIceCreamToCart(id, ic?.amount! + amountToAdd);
  };

  const addCustomIceCreamAmount = (id: number, amountToAdd: number) => {
    const cic = cartItems.customIceCreams.find((cic) => cic.id === id);
    updateCustomIceCreamToCart(id, cic?.amount! + amountToAdd);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addIceCreamToCart,
        addCustomIceCreamToCart,
        removeIceCreamFromCart,
        removeCustomIceCreamFromCart,
        updateIceCreamToCart,
        updateCustomIceCreamToCart,
        addIceCreamAmount,
        addCustomIceCreamAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
