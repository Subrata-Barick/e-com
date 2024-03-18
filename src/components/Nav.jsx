import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../contextandreducers/ContextStore'

const Nav = () => {
    const{products}=useContext(Store)
  return (
     <div className='flex justify-evenly flex-row font-bold text-4xl my-5'>
        <div>
            Store
        </div>
        <div className='flex gap-10'>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart<sup >{products.length}</sup> </Link>
        </div>
    </div>
  )
}

export default Nav 