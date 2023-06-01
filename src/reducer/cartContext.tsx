import React, { createContext, useContext, useReducer } from "react";
import { dummyData } from "../data";
import Reducer from "./Reducer";
import { ADD, REMOVE, INC, DEC, CLEAR_ALL } from "./Action";

const cartContextInfo = createContext(dummyData);

const initialValue = dummyData;

const CartContextProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(Reducer, initialValue);

  const addItem = (item: any) => {
    dispatch({ type: ADD, payload: item });
  };

  const removeItem = (itemId: any) => {
    dispatch({ type: REMOVE, payload: itemId });
  };

  const increaseQuantity = (itemId: any) => {
    dispatch({ type: INC, payload: itemId });
  };

  const decreaseQuantity = (itemId: any) => {
    dispatch({ type: DEC, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_ALL });
  };

  const cartContextValue = {
    cartData,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };

  return (
    <cartContextInfo.Provider value={cartContextValue}>
      {children}
    </cartContextInfo.Provider>
  );




};



export const useGlobalContext = () => {
  return useContext(cartContextInfo)
}

export default CartContextProvider;
