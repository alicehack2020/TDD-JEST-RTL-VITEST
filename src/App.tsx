import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router" 
import { createContext, useReducer, useState } from "react";
import { dummyData } from "./data";  

import { useGlobalContext } from "./reducer/cartContext";


export const cartContextInfo = createContext({
  data: dummyData,
  addItem: (item: any) => { },
  removeItem: (item: any) => { },
  increaseQuantity: (item: any) => { },
  decreaseQuantity: (item: any) => { },
  clearCart: (item: any) => { },
  getData: () => { }
})


import Reducer from "./reducer/Reducer";

const initialValue = dummyData



import { ADD, REMOVE, INC, DEC, CLEAR_ALL } from "./reducer/Action";
// export const GlobalInfo = createContext({ appColor: "white", handleColor: (item: string) => { } });
const App = () => {
  // const [color, setColor] = useState("white");
  // const handleColor = (item: string) => {
  //   setColor(item);
  // };
  // const value = {
  //   appColor: color,
  //   handleColor: handleColor,
  // };
   

  const [data, dispatch] = useReducer(Reducer, initialValue)


  

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
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    data
  };

  return (
    <cartContextInfo.Provider value={cartContextValue}>
       <RouterProvider router={router} /> 
    </cartContextInfo.Provider>
  );
};

export default App;
