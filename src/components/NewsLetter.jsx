import React from 'react'
import { FaDribbble, FaFacebook, FaInstagram } from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <section className='max-padd-container py-8 mt-2'>
      <div className='flexBetween flex-wrap gap-7'>
        <div>
          <h4 className='bolf-14 uppercase tracking-wider'>
            Suscribete a nuestro boletin, Para recibir las ultimas novedades, ofertas y mas.
          </h4>
            <p>Obten las ultimas novedades de nuestras, Ventas y Ofertas</p>
        </div>
        <div>
          <input type="email" placeholder='Correo Electronico..' className='p-4 bg-primary w-[222px]
           sm:w-[266px]
          outline-none text-[13px]' />
          <button className='btn-secondary !rounded-none !text-[13px] !font-bold uppercase'>Enviar</button>
        </div>
      <div className='flex gap-x-3 pr-14'>
        <div className='h-8 w-8 rounded-full hover:bg-secondary hover:text-white flexCenter transition-all duration-500'><FaFacebook /></div>
        <div className='h-8 w-8 rounded-full hover:bg-secondary hover:text-white flexCenter transition-all duration-500'><FaInstagram /></div>
        <div className='h-8 w-8 rounded-full hover:bg-secondary hover:text-white flexCenter transition-all duration-500'><FaDribbble/></div>

      </div>
      </div>
    </section>
  )
}

export default NewsLetter