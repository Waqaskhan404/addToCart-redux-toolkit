import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice';

function ProductCard() {
    const items=useSelector((state)=>state.allCart.items)
    const dispatch=useDispatch();


  return (
    <>

<div className="grid grid-cols-4 gap-4 pt-24 pl-5">
    {
        items.map((item)=>(
            <div className="flex justify-center" key={item.id}>
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={item.img} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">{item.title}</h5>
      <p className="text-gray-700 text-base mb-4 text-center">
        {item.price}
      </p>
      <div className='flex justify-center'>
      <button type="button" onClick={()=>dispatch(addToCart(item))} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add to card</button>
      </div>
    </div>
  </div>
</div>

            
        )

        )
    }
</div>
 
    
    </>
  )
}

export default ProductCard