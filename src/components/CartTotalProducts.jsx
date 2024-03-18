import React, { useContext } from 'react'
import { Store } from '../contextandreducers/ContextStore'

const CartTotalProducts = ({item}) => {
    const{removeCart}=useContext(Store);
    const handleRemove=()=>{
        removeCart(item)
    }
  return (
    <div className=' flex flex-row gap-8 px-10 items-center m-5 ' >
        <div>
            <img src={item.image} width={100} alt="" />
        </div>
        <div className='flex gap-[180px] text-lg font-bold '>
            <p>{item.title}</p>
            <p >amount:- <span className='text-orange-500'>{item.price.toFixed(2)}</span></p>
        </div>
        <div>
 <button className='bg-red-600 border border-red-700 rounded-lg text-white'onClick={handleRemove}>Remove</button>
        </div>
       
    </div>
  )
}

export default CartTotalProducts