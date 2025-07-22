import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { dummyAddress } from '../assets/data'

const CartTotal = () => {
   const { navigate, books, currency, cartItems, setCartItems, method, setMethod,
     getCartAmount,getCartCount, user, delivery_charges  } = useContext(ShopContext);

     const [addresses, setAddresses] = useState(dummyAddress);
     const [showAddress, setShowAddress] = useState(false);
     const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);

    const subtotal = getCartAmount();
    const shipping = subtotal === 0 ? 0 : delivery_charges;
    const tax = subtotal * 0.02; // 2%
    const totalAmount = subtotal + shipping + tax;


  return (
    <div>
      <h3 className="bold-22">
        Orden de detalle
        <span className="bold-14 text-secondary">
          ({getCartCount()}) Items
        </span>
      </h3>
      <hr className="bordder-gray-300 my-5"/>
      {/* Pago y Dirreccion */}
      <div className='mb-5'>
        <div className='my-5'>
          <h4 className='h4 mb-5'>Donde quieres recibir tu pedido?</h4>
          <div className='relative flex justify-between items-start mt-2'>
            <p>{selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city }, ${selectedAddress.state}, ${selectedAddress.country}` : "Direccion no encontrada"}</p>
            <button onClick={() => setShowAddress(!showAddress)} className="text-secondary medium-14 hover:underline cursor-pointer">Cambiar</button>  
            {showAddress && (
              <div className='absolute top-10 py-1 bg-white ring-1 ring-slate-900/10 text-sm w-full'>
                {addresses.map((address, index) => (
                  <p key={index} onClick={() =>(
                    setSelectedAddress(address),
                    setShowAddress(false))}
                    className="p-2 cursor-pointer hover:bg-gray-100 medium-14">
                    {address.street},
                    {address.city},
                    {address.state},
                    {address.country}
                  </p>
                ))}
                <p onClick={() => navigate("/address-form")} className='p-2 text-center cursor-pointer hover:bg-tertiary'>Agregar direccion</p>
              </div>
            )}
          </div>
        </div>
        <hr className="bordder-gray-300 my-5"/>

        <div className='my-6'>
          <h4 className='h4'>Metodo de Pago</h4>
          <div className='flex gap-3'>

            <div onClick={() => setMethod("COD")} 
            className={`${ method === "COD" ? "btn-secondary" : "btn-white"} !py-1 text-xs cursor-pointer `}>
              Dinero en efectivo
              </div>

              <div onClick={() => setMethod("stripe")} 
            className={`${ method === "stripe" ? "btn-secondary" : "btn-white"} !py-1 text-xs cursor-pointer `}>
              Stripe
              </div>

          </div>
        </div>
        <hr className="bordder-gray-300 my-5"/>
      </div>
      <div className='mt-4 space-y-2'>
        <div className='flex justify-between'>
          <h5 className='h5'>Precio</h5>
          <p>
            <p>{currency}{subtotal.toFixed(2)}</p>
          </p>
        </div>
            <div>
              <div className='flex justify-between'>
                <h5 className='h5'>Envio </h5>
                 <p>{currency}{shipping.toFixed(2)}</p>
              </div>
            </div>
        <div className='flex justify-between'>
          <h5 className='h5'>Tax de envio</h5>
           <p>{currency}{tax.toFixed(2)}</p>
        </div>
        <div className='flex justify-between text-lg font-medium mt-3'>
          <h5 className='h5'>Cantidad Total</h5>
          <p className='font-bold'>
            <p className='font-bold'>{currency}{totalAmount.toFixed(2)}</p>
          </p>
        </div>
      </div>
      <button className='btn-dark w-full mt-8 !rounded-md'>
        Proceder al pago
      </button>
    </div>
  )
}

export default CartTotal