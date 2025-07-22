import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { dummyOrders } from '../assets/data';

const MyOrders = () => {
  const { currency, user } = useContext(ShopContext);

  return (
    <div className='max-padd-container py-16 pt-28'>
      <Title 
      title1={" Mis Pedidos"}
      title2={" libros"} 
      titleStyles={"pb-10"} />

      {dummyOrders.map((order) => (
        <div key={order._id} className='bg-primary p-2 mt-12 rounded-lg'>
          {/* Lista de libros */}
          <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-3'>
            {order.items.map((item, index) => (
              <div key={index} className='flex gap-x-3'>
                <div className='flexCenter ounded-lg overflow-hidden'>
                  <img src={item.book.image[0]} alt="oredenImage" className='max-h-20 max-w-32 aspect-square object-contain' />
                </div>
                <div className='full block'>
                  <h5 className='h5 capitalize line-clamp-1'>{item.book.name}</h5>
                  <div className='flex flex-wrap gap-3 max-sm:gap-y-1 mt-1'>
                    <div className='flex items-center gap-x-2'>
                        <h5 className='medium-14'>Precio: </h5>
                        <p>{currency}{item.book.offerPrice}.00</p>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <h5 className='medium-14'>Cantidad: </h5>
                        <p>{item.quantity}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Informacion de envio */}
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-gray-300 pt-3'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-x-2'>
                  <h5 className='medium-14'>OrderId: </h5>
                  <p className='text-gray-400 text-xs break-all'>{order._id}</p>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center gap-x-2'>
                    <h5 className='medium-14'>Status de envio: </h5>
                    <p>{order.isPaid ? "Entregado" : "Pendiente"}</p>
                    <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Metodo: </h5>
                      <p className='text-gray-400 text-sm'>
                        {order.paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center gap-x-2'>
                    <h5 className='medium-14'>Fecha: </h5>
                    <p className='text-gray-400 text-sm'>
                      {new Date(order.createdAt).toDateString()}
                    </p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                    <h5 className='medium-14'>Cantidad: </h5>
                    <p className='text-gray-400 text-sm'>
                      {currency}
                      {order.amount}.00
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='flex items-center gap-x-2'>
                  <h5 className='medium-14'>Estado: </h5>
                  <div className='flex items-center gap-1'>
                    <span className='min-w-2 h-2 rounded-full bg-green-500' >
                    </span>
                      <p>{order.status}</p>
                  </div>
                  <button className='btn-secondary !py-1 !text-xs rounded-sm'>
                    Rastrear Pedido
                  </button>
                </div>

              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MyOrders