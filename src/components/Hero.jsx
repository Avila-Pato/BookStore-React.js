import React , { useState, useEffect, useContext  } from 'react';
import bg from '../assets/bg.png'
import bgHero from '../assets/bg-hero.png'

import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {  Autoplay } from 'swiper/modules';
import Item from './Item.jsx';
import { ShopContext } from '../context/ShopContext.jsx';


const Hero = () => {
    const { books } = useContext(ShopContext);
    const [popularBooks, setPopularBooks] = useState([]);

    useEffect(() => {
        const data = books.filter((item) => item.popular)
        setPopularBooks(data.slice(0, 6));
    }, [books])

   
  return (
    <section className='max-padd-container flex gap-6 h-[634px]
    mt-16 '>
        <div className=' flex-[5] bg-cover bg-center
         bg-no-repeat rounded-2xl' 
         style={{backgroundImage: `url(${bg})`}}>
            {/* Left side */}
            <div className='max-padd-container flex flex-col
            h-full justify-center pt-8'>
                <h3 className='bold-24 text-secondary font-thin'>Explora Libros que amaras</h3>
                <h1 className='h1 max-w-[699px] !font-[800]'>Encuentra tu próximo libro favorito</h1>
                <h2 className='capitalize h2 tracking-wider'>Hasta 40% de Descuento en tu primera compra</h2>
                <p className='max-w-xl pt-5'>
                    Descubre una amplia variedad de libros de todos los géneros. Ya sea ficción, no ficción o textos académicos, tenemos algo para todos. Disfruta de descuentos exclusivos en tus títulos favoritos.
                    Envíos rápidos y devoluciones fáciles. ¡Compra ahora y sumérgete en el mundo de la literatura con nosotros!
                </p>
                {/* BUTTON */}
                <div className='flex mt-4'>
                    <Link to={'/shop'} className='bg-white text-xs font-medium pl-6 rounded-full flexCenter gap-x-6'>Ver nuestros Stocks de Libros
                        <FaArrowRight className='bg-secondary 
                        text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:bg-primary group-hover:text-black transition-all
                        duration-500'/>
                    </Link>
                </div>
            </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='hidden lg:block flex-[2] bg-primary  rounded-2xl bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${bgHero})`} }>
            <div className='max-w-sm pt-28'>
                {/* Container */}
                <div>
                    {
                        <Swiper  
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                        }}
                        breakpoints={{
                            355: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            }
                        }}
                        modules={[Autoplay]}
                        className='min-h-[399px] max-w-64'
                        >
                            {popularBooks.map((book)=> (
                                <SwiperSlide key={book._id}>
                                    <Item book={book} fromHero={true} />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    }

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero