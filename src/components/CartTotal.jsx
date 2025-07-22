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
            <button onClick={() => setShowAddress(!showAddress)} className="">Cambiar</button>
            {showAddress && (
              <div>
                {addresses.map((address, index) => (
                  <p key={index} onClick={() => (setSelectedAddress(address), setShowAddress(false))} className="">
                    {address.street},
                    {address.city},
                    {address.state},
                    {address.country}
                  </p>
                ))}
                <p onclick={() => navigate("/address-form")}>Agregar direccion</p>
              </div>
            )}
          </div>
        </div>
        <hr className="bordder-gray-300 my-5"/>

        <div>
          <h4 className='h4'>Metodo de Pago</h4>
          <div>
            <div>Dinero en efectivo</div>
            <div>Seguro</div>
          </div>
        </div>
        <hr className="bordder-gray-300 my-5"/>
      </div>
      <div className='mt-4 space-y-2'>
        <div className='flex justify-between'>
          <h5 className='h5'>Precio</h5>
          <p>
            {currency}{getCartAmount()}
          </p>
        </div>

        <div className='flex justify-between'>
          <h5 className='h5'>Tax de envio</h5>
          <p>{currency}{getCartAmount() * 2 /100}</p>
        </div>
        <div className='flex justify-between text-lg font-medium mt-3'>
          <h5 className='h5'>Cantidad Total</h5>
          <p className='font-bold'>
            {currency}
            {getCartAmount() === 0 ? "$0.00" : getCartAmount() + getCartAmount() * 2 / 100}
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