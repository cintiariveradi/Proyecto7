import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const initialState = {
  items: [], // { id, name, price, image, qty }
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
  const item = action.payload;
  const qtyToAdd = Number(item.qty ?? item.quantity ?? 1);

  const existing = state.items.find((i) => i.id === item.id);

  if (existing) {
    return {
      ...state,
      items: state.items.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + qtyToAdd } : i
      ),
    };
  }

  return {
    ...state,
    items: [...state.items, { ...item, qty: qtyToAdd }],
  };
}


    case "REMOVE_ITEM": {
      const id = action.payload;
      return { ...state, items: state.items.filter((i) => i.id !== id) };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
