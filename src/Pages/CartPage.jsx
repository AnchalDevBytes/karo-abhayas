import React from 'react'
import { Button, CartCard } from '../components'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const {cartItems} = useCart();
  return (
    <section className='max-w-[80vw] min-h-[80vh] mx-auto my-10 border
     border-neutral-300'>
      <div className='flex justify-between p-2 md:px-10 md:py-5 border-b border-neutral-300'>
        <h3 className='md:text-3xl text-lg font-bold'>TOTAL: ₹2000</h3>
        <Button text={"CHECKOUT"}/>
      </div>
      <div >
        {
          cartItems?.map((item)=>(
            <CartCard key={item?.id} item={item}/>
          ))
        }
      </div>
    </section>
  )
}

export default CartPage