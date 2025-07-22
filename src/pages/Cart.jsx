import React, { useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { FaMinus, FaPlus } from 'react-icons/fa6';
import CartTotal from '../components/CartTotal'


const Cart = () => {
  const { navigate, books, currency, cartItems, updateQuantity } = useContext(ShopContext);

  return books && cartItems ? (
    <div className='max-padd-container py-16 pt-28'>
        <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
          {/* Left side */}
          <div className='flex flex-[2] flex-col gap-3'>
            <Title title1={'Carrito'} title2={' de Compras'} titleStyles={'pb-10'} paraStyles={'hidden'} />
            <div className='grid grid-cols-[6fr_1fr_2fr] text-base font-medium bg-primary p-2 rounded-lg'>
              <h5>Detalles del Producto</h5>
              <h5>SubTotal</h5>
              <h5>Cantidad</h5>
            </div>
            {books.map((book) => {
              const quantity = cartItems[book._id]
              if(quantity > 0) {
                return (
                  <div key={book._id} className='grid grid-cols-[6fr_1fr_2fr] items-center bg-primary p-2 rounded-lg'>
                    <div className='flex items-center md:gap-6 gap-3'>
                      <div className='flex bg-primary'>
                         <img src={book.image} alt="" className='w-12 rounded-lg' />
                      </div>
                      <div>
                        <h5 className='h5 hidden sm:block line-clamp-1'>{book.name}</h5>
                        <div className='flexBetween mt-2'>
                          <div className='flex items-center ring-1 ring-slate-900/5 p-0.5 rounded-full overflow-hidden bg-white'>
                          {/* Disminuir */}
                          <button onClick={() => updateQuantity(book._id, quantity - 1)}
                          disabled={quantity === 1} 
                          className='p-1.5 bg-primary rounded-full cursor-pointer'>
                            <FaMinus className='text-xs'/>
                          </button>
                          <p className='px-2'>{ quantity }</p>
                          {/* Aumentar */}
                          <button onClick={() => updateQuantity(book._id, quantity + 1)}>
                            <FaPlus  className='text-xs cursor-pointer'/>
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Borrar producto */}
                    <p>{currency}{(book.offerPrice * quantity).toFixed(2)}</p>
                    <button onClick={() => updateQuantity(book._id, 0)} className='cursor-pointer mx-auto bold-14 text-secondary'>Borrar</button> 
                  </div>
                )
              }
              return null
            })}
          </div>
          {/* Right side */}
          <div className='flex flex-1 flex-col'>
              <div className='max-w-[379px] w-full bg-primary p-5 py-10 max-md:mt-16 rounded-xl'>
                <CartTotal />
              </div>
          </div>
        </div>
    </div>
  ) : null
}

export default Cart