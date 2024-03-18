import React, { useContext, useEffect, useState } from 'react';
import Nav from '../components/Nav';
 import Products from '../components/Products';
import { Store } from '../contextandreducers/ContextStore';

const Home = () => {
    const{data,filterIng,setFilterIng}=useContext(Store);
   
const handleClick=(product)=>{
    const filteredItem=product==='all'?data:data.filter((item)=>item.category===product)
    setFilterIng(filteredItem)

}
 return (
    <div>
          <Nav/>
        

        <div className='flex  justify-center items-center  gap-5 text-2xl font-semibold mt-10 '>
            <button className='border border-red-600 bg-green-600 rounded-lg p-2' onClick={()=>handleClick("all")}>All</button>

            <button className='border border-red-600 bg-green-600 rounded-lg p-2' onClick={()=>handleClick("men's clothing")}>men's clothing</button>
        <button className='border border-red-600 bg-green-600 rounded-lg p-2' onClick={()=>handleClick("jewelery")}>jewelery</button>
        <button className='border border-red-600 bg-green-600 rounded-lg p-2' onClick={()=>handleClick("electronics")}>electronics</button>
 <button className='border border-red-600 bg-green-600 rounded-lg p-2' onClick={()=>handleClick("women's clothing")}>women's clothing</button>
         </div>
        
        <div  className='grid grid-cols-3 '>
             {filterIng.map((item)=>(
           <Products item={item} key={item.id}/>    ))}
        </div>

        
        
    </div>
  )
}

export default Home