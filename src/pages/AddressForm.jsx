import React, { useContext, useState, useEffect } from 'react'
import CartTotal from "../components/CartTotal"
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const AdressForm = () => {
  const {navigate, user, method, setMethod } = useContext(ShopContext)

  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.value;
    const value = e.target.value;

    setAddress((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(address);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className= "max-padd-container py-16 pt-28 ">
      {/* contenedor */}
      <div className='flex flex-col xl:flex-row gap-20  xl:gap-28'>
        {/* Left side */}
        <form
          onSubmit={onSubmitHandler}
          className='flex flex-[2] flex-col gap-3 text-[95%] '
          >
            <Title
              title1={"Informacion"}
              title2={" de Envio"}
              titleStyles={"pb-5"} 
            />
            <div className='flex gap-3'>
              <input 
                onChange={onChangeHandler} 
                value={address.firstname}
                type="text"
                name="firstname"
                placeholder='Nombre '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                 />
              <input 
                onChange={onChangeHandler} 
                value={address.lastname}
                type="text"
                name="lastname"
                placeholder='Apellido '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                 />
            </div>
            <div className='flex gap-3'>
              <input 
                onChange={onChangeHandler} 
                value={address.email}
                type="email"
                name="email"
                placeholder='Correo Electronico '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-full'
                required
                 />
              <input 
                onChange={onChangeHandler} 
                value={address.phone}
                type="text"
                name="phone"
                placeholder='Telefono '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                 />
            </div>
            <div className='flex gap-3'>
              <input 
                onChange={onChangeHandler} 
                value={address.street}
                type="text"
                name="street"
                placeholder='Calle '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                 />
              <input 
                onChange={onChangeHandler} 
                value={address.city}
                type="text"
                name="city"
                placeholder='Ciudad '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                />
            </div>
            <div className='flex gap-3'>
              <input 
                onChange={onChangeHandler} 
                value={address.state}
                type="text"
                name="state"
                placeholder='Estado '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                />
              <input 
                onChange={onChangeHandler} 
                value={address.zipcode}
                type="text"
                name="zipcode"
                placeholder='Codigo Postal '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                />
            </div>
            <div className='flex gap-3'>
              <input 
                onChange={onChangeHandler} 
                value={address.country}
                type="text"
                name="country"
                placeholder='Pais '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                />
            </div>
            <div className='flex gap-3'>
              <input 
                onChange={onChangeHandler} 
                value={address.phone}
                type="text"
                name="phone"
                placeholder='Telefono '
                className='ring-1 ring-slate-900/10 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2'
                required
                />
            </div>
            <button type='submit' className='btn-dark rounded-md w-1/2 mt-2'>
              Agregar Direccion
            </button>
        </form>
        {/* Right side */}
        <div className='flex flex-1 flex-col '>
          <div className='max-w-[379px] w-full p-4 bg-primary py-10 max-md:mt-16 rounded-xl'>
            <CartTotal  method={method} setMethod={setMethod}/>
            <button type='submit' className='btn-dark !rounded-md w-full mt-8'>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdressForm