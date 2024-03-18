import React, { useContext } from 'react'
import Nav from '../components/Nav'
import { Store } from '../contextandreducers/ContextStore'
import CartTotalProducts from '../components/CartTotalProducts'

const Cart = () => {
    const{products,total}=useContext(Store)
  return (
    <div>
        <Nav/>
        <div className='flex flex-grow items-center justify-between mt-2 py-6 px-10 text-xl font-medium'>
            <h3>Your cart</h3>
        <p>Total $:{total}</p>

        </div>
        <div>
            {products.map((item)=>(
                <CartTotalProducts item={item} key={item.key} />
            ))}
        </div>
        
    </div>
  )
}

export default Cart