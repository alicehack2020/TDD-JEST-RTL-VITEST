import React, { createContext, useContext, useReducer, useState } from "react";
import { dummyData } from "../data";
import Reducer from "./Reducer";
import { ADD, REMOVE, INC, DEC, CLEAR_ALL,LOAD } from "./Action";

const initialValue = dummyData;

const cartContextInfo = createContext({
  cartData: dummyData,
  addItem: (item: any) => { },
  removeItem: (item: number) => { },
  increaseQuantity: (item: number) => { },
  decreaseQuantity: (item: number) => { },
  clearCart: () => {},
  load: () => {}
})

const CartContextProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(Reducer, initialValue);
  
  const addItem = (item: any) => {
    dispatch({ type: ADD, payload: item });
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: REMOVE, payload: itemId });
  };

  const increaseQuantity = (itemId: number) => {
    dispatch({ type: INC, payload: itemId });
  };

  const decreaseQuantity = (itemId: number) => {
    dispatch({ type: DEC, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_ALL });
  };
  const load = () => {
    dispatch({ type: LOAD,payload:initialValue});
  };

  const cartContextValue = {
    cartData,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    load
  };

  return (
    <cartContextInfo.Provider
      value={cartContextValue}
    >
      {children}
    </cartContextInfo.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(cartContextInfo)
}

export default CartContextProvider;
