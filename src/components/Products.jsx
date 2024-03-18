import React, { useContext } from "react";
import { Store } from "../contextandreducers/ContextStore";


const Products = ({ item }) => {
    const {addtoCart}=useContext(Store)
    const handleAdd=()=>{
addtoCart(item)
    }
  return (
    <div>
      <div
        className="border border-red-700 rounded mx-2 text-center my-4 shadow-orange-500 h-[350px]  shadow  "
        key={item.id}
      >
        <div className="flex justify-center items-center mt-4 ">
          <img src={item.image} width={80} height={80} alt="images" />
        </div>
        <p>{item.title}</p>
        <p>{item.category}</p>
        <p>${item.price}</p>
        <button
          className="border border-red-700 rounded m-2 p-2 bg-orange-500 text-black font-bold text-center mb-2"
          onClick={handleAdd}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
