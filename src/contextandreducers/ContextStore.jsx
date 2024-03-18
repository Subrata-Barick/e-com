import { createContext, useState, useEffect, useReducer } from "react";
import Reducer, { initialState } from "./Reducer";

export const Store = createContext();

import React from "react";

const ContextStore = ({ children }) => {
      const [data,setData]=useState([])
      const[filterIng,setFilterIng]=useState([])

       useEffect(()=>{
          const fetchingData=async()=>{
              try{
                  const resData=await fetch('https://fakestoreapi.com/products');
                  const fetchdata=await resData.json()
                  console.log(fetchdata)
                  setData(fetchdata)
                  setFilterIng(fetchdata)

              }
              catch(error){
                  console.log('this is error page by fetching side',error)

              }
          }
          fetchingData()
      },[])
    

  const [state, dispatch] = useReducer(Reducer, initialState);

  const addtoCart = (product) => {
    const updateCart = state.products;
    updateCart.push(product);
    updatePrice(updateCart);

    dispatch({
      type: add,
      payload: updateCart,
    });

  }
    const removeCart = (product) => {
      const updateCart = state.products.filter(
        (item) => item.id !== product.id
      );
      updatePrice(updateCart);
      dispatch({
        type: "remove",
        payload: updateCart,
      });

    }

      const updatePrice = (products) => {
        let total = 0;
        products.forEach((product) => {
          total += product.price;
        });
        dispatch({
          type: "update Price",
          payload: total,
        });
      
    
  };

  const value = {
    total: state.total,
    products: state.products,
    addtoCart,
    removeCart,
    data,
    filterIng,setFilterIng
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default ContextStore;
